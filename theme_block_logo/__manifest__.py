# -*- coding: utf-8 -*-
##############################################################################
#
#    Copyright (C) 2021 Vertel AB
#    All Rights Reserved
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as published
#    by the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################
#
# https://www.odoo.com/documentation/14.0/reference/module.html
#
{
    'name': "Theme Block Logo",
    'version': '1.0',
    'summary': "Theme for Kastrup & Genberg",
    'category': 'Theme/Creative', 
    'description': """
        Extra themes made by Haojun.
        ============================
        """,
    'author': 'Vertel AB',
    'website': 'http://www.vertel.se',
    'license': 'AGPL-3',
    'depends': [
        'crm',
        'sale_management',
        'theme_common',
        'website_blog',
        'website_sale',
        ],
    'data': [
        'views/assets.xml',
        'views/kastrup_genberg.xml',
        ],
    'demo': [],
    'installable': True,
    'application': True,
    'auto_install': False
}
