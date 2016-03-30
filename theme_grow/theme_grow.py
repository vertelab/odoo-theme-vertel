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
from openerp import http
from openerp.http import request
from datetime import datetime
from lxml import html
import werkzeug


class project(models.Model):
    _inherit = 'project.project'
    
    project_image = fields.Binary(string="Image")    

class website(models.Model):
    _inherit = 'website'
    
    social_instagram = fields.Char(string='Instagram Account')

class website_config_settings(models.TransientModel):
    _inherit = 'website.config.settings'

    social_instagram = fields.Char(related='website_id.social_instagram',string='Instagram Account')




class Grow(http.Controller):
    @http.route(['/logo.png'], type='http', auth="public", cors="*")
    def company_logo(self):
        user = request.registry['res.users'].browse(request.cr, request.uid, request.uid)
        response = werkzeug.wrappers.Response()
        return request.registry['website']._image(request.cr, request.uid, 'res.company', user.company_id.id, 'logo',
                                                  response, max_width=500, max_height=None, )

    @http.route(['/logo1024.png'], type='http', auth="public", cors="*")
    def company_logo1024(self):
        user = request.registry['res.users'].browse(request.cr, request.uid, request.uid)
        response = werkzeug.wrappers.Response()
        return request.registry['website']._image(request.cr, request.uid, 'res.company', user.company_id.id, 'logo',
                                                  response, max_width=1024, max_height=None, )

    @http.route(['/work'], type='http', auth="public", website=True)
    def work_list(self):
        return request.website.render("theme_grow.work_list",
            {'project_ids': request.env['project.project'].sudo().search([],order="name")})

    @http.route(['/work/<model("project.project"):project>'], type='http', auth="public", website=True)
    def work_single(self,project=None):
        return request.website.render("theme_grow.work_single",{'project': project })
