# -*- coding: utf-8 -*-
##############################################################################
#
# odoo, Open Source Management Solution, third party addon
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

from odoo import models, fields, api, _
from odoo import http
from odoo.http import request
from datetime import datetime
from lxml import html
import werkzeug

from odoo import models


class ThemeBlockLogo(models.AbstractModel):
    _inherit = 'theme.utils'

    def _theme_block_logo_post_copy(self, mod):
        self.enable_view('website.option_ripple_effect')
        # ~ self.enable_view('website.template_header_default')
        # ~ self.enable_view('website.footer_custom')


class Website(models.Model):
    _inherit = 'website'
       
    def get_news(self, text, length=0):
        if text:
            result_text = ' '.join(html.fromstring(text).text_content().split())
            if 0 < length < len(result_text):
                return result_text[:length]
            return result_text
        return ''

    def get_season(self):
        if datetime.today().month in [3, 4, 5]:
            return 'spring'
        if datetime.today().month in [6, 7, 8]:
            return 'summer'
        if datetime.today().month in [9, 10, 11]:
            return 'autumn'
        if datetime.today().month in [1, 2, 12]:
            return 'winter'
        return ''


class BlockLogo(http.Controller):
    @http.route(['/logo500.png'], type='http', auth="public", cors="*")
    def company_logo500(self):
        user = request.env['res.users'].browse(request.cr, request.uid)
        response = werkzeug.wrappers.Response()
        return request.env['website']._image(request.cr, request.uid, 'res.company', user.company_id.id, 'logo',
                                                  response, max_width=500, max_height=None, )

    @http.route(['/logo1024.png'], type='http', auth="public", cors="*")
    def company_logo1024(self):
        user = request.env['res.users'].browse(request.cr, request.uid)
        response = werkzeug.wrappers.Response()
        return request.env['website']._image(request.cr, request.uid, 'res.company', user.company_id.id, 'logo',
                                                  response, max_width=1024, max_height=None, )
