# -*- coding: utf-8 -*-
##############################################################################
#
# OpenERP, Open Source Management Solution, third party addon
# Copyright (C) 2004-2015 Vertel AB (<http://vertel.se>).
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################

from openerp import models, fields, api, _
from openerp.exceptions import except_orm, Warning, RedirectWarning
from openerp import http
from openerp.http import request
from openerp import SUPERUSER_ID
from datetime import datetime
from lxml import html
import openerp.tools
import werkzeug


class website(models.Model):
    _inherit = 'website'
       
    def get_news(self, text):
        return ' '.join(html.fromstring(text).text_content().split())
       
class Teamdoc(http.Controller):

    @http.route(['/logo500.png',],type='http', auth="public", cors="*")
    def company_logo500(self, dbname=None, **kw):
        
        #def website_image(self, model, id, field, max_width=None, max_height=None):    
        #def _image(self, cr, uid, model, id, field, response, max_width=maxint, max_height=maxint, cache=None, context=None):
        #user_id = request.registry['ir.model.data'].xmlid_to_res_id(request.cr, openerp.SUPERUSER_ID, 'base.public_user')
      #  return "User id: %s" % (user_id)

        user = request.registry['res.users'].browse(request.cr, request.uid,request.uid)
        #~ return "User id: %s user %s " % (request.uid,user.company_id.logo_web)
        #~ return "User id: %s user %s company id %s" % (user_id,user,user.company_id.id if user.company_id else 99)
        #~ 
        
        
        response = werkzeug.wrappers.Response()
        return request.registry['website']._image(request.cr, request.uid, 'res.company', user.company_id.id, 'logo', response, max_width=500, max_height=None,)

    @http.route(['/logo1024.png',],type='http', auth="public", cors="*")
    def company_logo1024(self, dbname=None, **kw):
        
        #def website_image(self, model, id, field, max_width=None, max_height=None):    
        #def _image(self, cr, uid, model, id, field, response, max_width=maxint, max_height=maxint, cache=None, context=None):
        #user_id = request.registry['ir.model.data'].xmlid_to_res_id(request.cr, openerp.SUPERUSER_ID, 'base.public_user')
      #  return "User id: %s" % (user_id)

        user = request.registry['res.users'].browse(request.cr, request.uid,request.uid)
        #~ return "User id: %s user %s " % (request.uid,user.company_id.logo_web)
        #~ return "User id: %s user %s company id %s" % (user_id,user,user.company_id.id if user.company_id else 99)
        #~ 
        
        
        response = werkzeug.wrappers.Response()
        return request.registry['website']._image(request.cr, request.uid, 'res.company', user.company_id.id, 'logo', response, max_width=1024, max_height=None,)


    @http.route(['/companytest',],type='http', auth="none")
    def company_test(self, dbname=None, **kw):
        return "<h1>Company Test</H1>"
        
        
        #def website_image(self, model, id, field, max_width=None, max_height=None):    
        #def _image(self, cr, uid, model, id, field, response, max_width=maxint, max_height=maxint, cache=None, context=None):
        
        response = werkzeug.wrappers.Response()
        return request.registry['website']._image(request.cr, request.uid, 'res.company', 1, 'logo_web', response, max_width=500, max_height=None,)

        
        #~ return request.registry['website']._image('res.company',1,'logo_web',max_width=500)
        #~ 
        #~ company_id = request.registry['ir.model.data'].xmlid_to_res_id(request.cr, openerp.SUPERUSER_ID, 'base.public_user')
        #~ user = request.registry['res.users'].browse(request.cr, request.uid,request.uid)
        #~ size = (500,None)
        #~ return http.send_file(openerp.tools.image_resize_image(user.company_id.logo_web, size,filename="Company logo"))


#openerp.tools.image_resize_image(base64_source=image_base64, size=(width, height), encoding='base64', filetype='PNG')
