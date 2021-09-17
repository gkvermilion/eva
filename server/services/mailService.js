const nodemailer = require('nodemailer')

class mailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })

    }


    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html:
                `
                   <!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" lang="RU">


                <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <title>Mail authorization</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://fonts.google.com/specimen/Roboto+Slab?category=Serif,Sans+Serif" rel="stylesheet"/>
                <link rel="stylesheet" href="/assets/css/style.css">
                </head>
                <style>
                .button {
                    margin-left: 50px;
                    text-decoration: none;
                    text-align: center;
                    padding: 11px 32px;
                    border: 2px #004F72;
                    -webkit-border-radius: 9px;
                    -moz-border-radius: 9px;
                    border-radius: 9px;
                    font: 17px Arial, Helvetica, sans-serif;
                    font-weight: bold;
                    color: #E5FFFF;
                    background-color: #3BA4C7;
                    background-image: -moz-linear-gradient(top, #3BA4C7 0%, #1982A5 100%);
                    background-image: -webkit-linear-gradient(top, #3BA4C7 0%, #1982A5 100%);
                    background-image: -o-linear-gradient(top, #3BA4C7 0%, #1982A5 100%);
                    background-image: linear-gradient(92.96deg, #8A2424 30.55%, #480A0A 83.02%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1982A5', endColorstr='#1982A5', GradientType=0);
                    -webkit-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
                    -moz-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
                    box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
                }
            
                [style*="Roboto Slab"] {
                    font-family: 'Roboto Slab', arial, sans-serif !important;
                }
            
                .header-td {
                    height: 60px;
                }
            
                .button-td {
                    width: 600px;
                    padding-top: 40px;
                    padding-bottom: 40px;
                }
            
                .main-text {
                    margin: 25px;
                }
            
                .footer-td {
                    height: 100px;
                    padding-top: 0;
                    padding-bottom: 0;
                }
            
                .table-600 {
                    padding-top: 0;
                    padding-bottom: 0;
                }
            
                .copyright-td {
                    font-size: 10px;
                    color: lightgray;
                }
            
                .additional-link {
                    font-size: x-small;
                    color: #6c6c6c;
                    padding-top: 10px;
                }
            
                .thanks {
                    margin-top: 150px;
                }
            
                .table-600 {
                    height: 70px;
            
                </style>
                <body style="margin: 0; padding: 0;">
                <div id="maill"></div>
                <table cellpadding="0" cellspacing="0" width="100%" bgcolor="white">
                    <tr>
                        <td>
                            <table class="main table-600" cellpadding="0" cellspacing="0" width="600" align="center">
                                <tr>
                                    <td width="600"></td>
                                </tr>
                                <tr>
                                    <td class="header-td" bgcolor="#2D2E2D">
                                        <table class="table-600" cellpadding="0" cellspacing="0" width="600" align="center">
                                            <tr>
                                                <td align="center" class="logo">
                                                    <a href="#">
                                                        <img src="assets/img/unnamed.png" alt="logo" width="50px" height="50px"/>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="button-td" bgcolor="white" cellspacing="0" width="600" align="left">
                                            <tr>
                                                <td class="main-text" align="center">
                                                    <h1 align="left" style="font-family: 'Roboto Slab', arial, sans-serif">Привет!</h1>
                                                    <p align="left" style="font-family: 'Roboto Slab', arial, sans-serif">Для
                                                        подтверждения почты нажмите сюда <a href="${link}" class="button">Подтвердить</a></p>
                                                    <p class="thanks" align="left"
                                                       style="font-family: 'Roboto Slab', arial, sans-serif">Спасибо за выбор нашего
                                                        сервиса! <a href="#">EVABOOST.COM</a></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="additional-link">
                                                    <hr align="center">
                                                    <p style="font-family: 'Roboto Slab', arial, sans-serif">Если кнопка не работает,
                                                        перейдите по ссылке ниже</p>
                                                    <a href="${link}" style="font-family: 'Roboto Slab', arial, sans-serif">Тык тык Тык</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="footer-td" bgcolor="#2D2E2D">
                                        <table class="table-600" cellpadding="0" cellspacing="0" width="600" align="center">
                                            <tr>
                                                <td class="footer-logo" align="center">
                                                    <a href="#">
                                                        <img src="assets/img/unnamed.png" alt="footer-logo" width="50px" height="50px"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                
                                            </tr>
                                            <tr>
                                                <td class="copyright-td" align="center"
                                                    style="font-family: 'Roboto Slab', arial, sans-serif">© 2021 evaboost.com. Все права
                                                    защищены.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                </body>
                </html>
                                `
                        })
                    }
                }

            module.exports = new mailService();