const nodemailer = require('nodemailer');

// Convert the image to a Base64 string


module.exports = {
  
  async sendMail(req, res) {
   
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: "signatizebiztech@gmail.com",
        pass: "cqzetzzqxdadjjll"
      }
    });

    var mailOptions = {
      from: "signatizebiztech@gmail.com",
      to: "admin@signatizebusiness.com",
      subject: "QUERY SENT BY USER" + req.body.email,
      html: `
      <!doctype html>
<html>

<head>
    <style>
        h6 {
            font-size: 16px;
            margin: 15px;
            color: #424242;
        }

        .footer h6 {
            font-size: 16px;
            margin: 5px;
            color: #012f5c !important;
        }

        .credential {
            vertical-align: middle;
        }

        label {
            color: #66cadd;
        }

        .h-30 {
            height: 30px;
        }

        .label-value {
            border: 1px solid #ddd;
            text-align: left;
            padding-left: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .header {
            padding-bottom: 10px;
        }

        .header-logo {
            text-align: center;
            padding: 40px;
            background: #fff;
            box-shadow: 0 0 5px #ddd;
        }

        .text-center {
            text-align: center;
        }

        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
        }

        body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%;
        }

        table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
        }

        /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */
        .body {
            background-color: #f6f6f6;
            width: 100%;
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px;
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px;
        }

        /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%;
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
            box-shadow: 0 0 5px #ddd;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%;
            background-color: #fff !important;
        }

        .footer td,
        .footer p,
        .footer span,
        .footer a {
            color: #012f5c !important;
            font-size: 12px;
            text-align: center;
        }

        /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px;
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize;
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px;
            color: rgb(139, 139, 139);
        }

        p li,
        ul li,
        ol li {
            list-style-position: inside;
            margin-left: 5px;
        }

        a {
            color: #3498db;
            text-decoration: underline;
        }

        /* -------------------------------------
          BUTTONS
      ------------------------------------- */
        .btn {
            box-sizing: border-box;
            width: 100%;
        }

        .btn>tbody>tr>td {
            padding-bottom: 15px;
        }

        .btn table {
            width: auto;
        }

        .btn {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center;
            width: auto;
            height: auto;
            margin: 10px 0;
        }

        .btn {
            background-color: #ffffff;
            border: solid 1px #3498db;
            border-radius: 5px;
            box-sizing: border-box;
            color: #3498db;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            padding: 7px 25px;
            text-decoration: none;
            text-transform: capitalize;
        }

        .btn-primary {
            background-color: #3498db;
        }

        .btn-primary {
            background-color: #3498db;
            border-color: #3498db;
            color: #ffffff;
        }

        /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
        .last {
            margin-bottom: 0;
        }

        .first {
            margin-top: 0;
        }

        .align-center {
            text-align: center;
        }

        .align-right {
            text-align: right;
        }

        .align-left {
            text-align: left;
        }

        .clear {
            clear: both;
        }

        .mt0 {
            margin-top: 0;
        }

        .mb0 {
            margin-bottom: 0;
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0;
        }

        .powered-by a {
            text-decoration: none;
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0;
        }

        /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
        @media only screen and (max-width: 620px) {
            table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }

            table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
                font-size: 16px !important;
            }

            table[class=body] .wrapper,
            table[class=body] .article {
                padding: 10px !important;
            }

            table[class=body] .content {
                padding: 0 !important;
            }

            table[class=body] .container {
                padding: 0 !important;
                width: 100% !important;
            }

            table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }

            table[class=body] .btn table {
                width: 100% !important;
            }

            table[class=body] .btn a {
                width: 100% !important;
            }

            table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }
        }

        /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
        @media all {
            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }

            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
            }

            .btn-primary table td:hover {
                background-color: #34495e !important;
            }

            .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important;
            }
        }
    </style>
</head>

<body>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
                <div class="content">
                    <div class="header">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="header-logo">
                                    <a target="_blank" href="http://sigbiztech.com/#/home">
                                    <img width="200px" src="http://user.sigbiztech.com/Content/assets/images/logo.png">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <table role="presentation" class="main" border="0">
                        <tr>
                            <td class="wrapper">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td class="text-center">
                                            <h6>Hi , Admin</h6>
                                            <p>Here is the new inquiry from your App.</p>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table role="presentation" border="0" cellpadding="0"
                                                                cellspacing="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="100px"></td>
                                                                        <td class="credential" width="20%">
                                                                            <label>Full Name:</label>
                                                                        </td>
                                                                        <td width="30%" class="label-value"
                                                                            style="border: 1px solid #ddd; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                                                                            ${req.body.name}
                                                                        </td>
                                                                        <td width="100px"></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td width="100px"></td>
                                                                        <td width="20%" class="credential">
                                                                            <label>Email:</label>
                                                                        </td>
                                                                        <td width="30%"
                                                                            style="border: 1px solid #ddd; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                                                                            ${req.body.email}
                                                                        </td>
                                                                        <td width="100px"></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td width="100px"></td>
                                                                        <td width="20%" class="credential">
                                                                            <label>Message:</label>
                                                                        </td>
                                                                        <td width="30%"
                                                                            style="border: 1px solid #ddd; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                                                                            ${req.body.message}
                                                                        </td>
                                                                        <td width="100px"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="100px"></td>
                                                                        <td width="20%" class="credential">
                                                                            <label>Location:</label>
                                                                        </td>
                                                                        <td width="30%"
                                                                            style="border: 1px solid #ddd; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                                                                            ${req.body.location}
                                                                        </td>
                                                                        <td width="100px"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div style="margin-top: 15px; margin-bottom: 15px;">
                                                <a href="https://play.google.com/store/apps/details?id=com.signatize&pli=1" target="_blank"><img
                                                        src="https://linkjapan.co.jp/wp-content/uploads/2017/11/google-play-badge.png"
                                                        width="150px"></a>

                                                <a href="#" target="_blank"><img
                                                        src="https://icon-library.net/images/apple-store-icon-transparent/apple-store-icon-transparent-24.jpg"
                                                        width="150px"></a>
                                            </div>

                                            <p>Good luck! Thanks.</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <div class="footer">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td width="33.33%" class="content-block">
                                    <h6>Get In Touch</h6>
                                    <div>admin@signatizebusiness.com</div>
                                    <div>+91 73830 60549</div>
                                </td>
                                <td width="33.33%" class="content-block">
                                    <h6>Address</h6>
                                    <div>TF 314, Kanha Capital Opp. Express Hotel, R.C.Dutt Road, Alkapuri 380007</div>
                                </td>
                                <td width="33.33%" class="content-block">
                                    <h6>Signatize</h6>
                                    <a href="http://sigbiztech.com/#/terms&conditions">Terms of Condition</a>
                                    <a href="http://sigbiztech.com/#/privacypolicy">Privacy Policy</a>
                                </td>
                            </tr>

                        </table>
                    </div>
                    <!-- END FOOTER -->

                </div>
            </td>
            <td>&nbsp;</td>
        </tr>
    </table>
</body>

</html>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send({ res: '0', message: "Something Went Wrong!!!" + error.message, data: null })
      } else {
        res.status(200).send({ res: '1', message: "Mail has been sent successfully!", data: info })
      }
    });
  }
}