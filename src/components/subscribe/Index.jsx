import React from "react";
import styles from "./Index.module.css";

export default function Ideas() {
  const mailchimpSubscribeForm = `<!-- Begin Mailchimp Signup Form -->
  <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
  <style type="text/css">
    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  max-width:600px;}
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  </style>
  <div id="mc_embed_signup">
      <form action="https://uqbar.us9.list-manage.com/subscribe/post?u=e08ff264fbac9083ce10be8e1&amp;id=2ccaf6072d&amp;f_id=00910ee1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
  <div class="mc-field-group">
    <label for="mce-EMAIL">EMail  <span class="asterisk">*</span>
  </label>
    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
    <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
  </div>
  <div class="mc-field-group">
    <label for="mce-FNAME">Nombre </label>
    <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
    <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
  </div>
  <div class="mc-field-group">
    <label for="mce-LNAME">Apellido </label>
    <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
    <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
  </div>
  <div class="mc-field-group">
    <label for="mce-MMERGE3">Universidad/Trabajo </label>
    <input type="text" value="" name="MMERGE3" class="" id="mce-MMERGE3">
    <span id="mce-MMERGE3-HELPERTEXT" class="helper_text"></span>
  </div>
    <div id="mce-responses" class="clear foot">
      <div class="response" id="mce-error-response" style="display:none"></div>
      <div class="response" id="mce-success-response" style="display:none"></div>
    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e08ff264fbac9083ce10be8e1_2ccaf6072d" tabindex="-1" value=""></div>
          <div class="optionalParent">
              <div class="clear foot">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                  <p class="brandingLogo"><a href="http://eepurl.com/idTVqr" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
              </div>
          </div>
      </div>
  </form>
  </div>
  <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';fnames[4]='MMERGE4';ftypes[4]='text';fnames[5]='MMERGE5';ftypes[5]='text';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
  <!--End mc_embed_signup-->`;

  return (
    <div
      className={styles["subscribeForm-container"]}
      dangerouslySetInnerHTML={{ __html: mailchimpSubscribeForm }}
    />
  );
}
