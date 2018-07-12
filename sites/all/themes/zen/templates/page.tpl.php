
<div id="loading">
  <div id="loading-center">
    <div id="loading-center-absolute">
      <div class="object" id="first_object"></div>
      <div class="object" id="second_object"></div>
      <div class="object" id="third_object"></div>
      <div class="object" id="forth_object"></div>
    </div>
  </div> 
</div>


<div id="page-wrapper">
<div id="page">

  <header>
    <div class="header-wrapper">
      <?php print render($page['header']); ?>

      <a href="http://ethnoidea.com.ua/"><img class="logo" alt="Логотип" src="/misc/images/logo.png" /></a>

      <div class="logo-sitename">
        <img alt="Назва" src="/misc/images/logo_sitename.png" />
      </div>

      <div class="sub-title">
        Національні мотиви <div>в житті сучасних людей</div>
      </div>
      
    </div>
  </header>

  <div id="main-wrapper">
  <div id="main">
    <div id="content" class="column">
      

      <?php print render($page['content']); ?>

      <?php print render($page['highlighted']); ?>
      <?php print render($page['help']); ?>
    </div>

    <div id="contacts-anchor"></div>
    <div class="contacts">
      <div class="contacts-wrapper">

        <div class="contacts-wrapper-top">
          <div class="contacts-title">
            Контакти:
          </div>
          <div class="contacts-block">
            <img class="icon-contacts" alt="заглушка" src="/misc/images/name.png" />
            <div class="icon-text icon-text-edit1">
              Анна Оксимець - <div>дизайнер і засновниця студії</div>
            </div>
          </div>
          <div class="contacts-block">
            <img class="icon-contacts" alt="заглушка" src="/misc/images/telefone.png" />
            <div class="icon-text">
              Тел: +38067 273 66 17
            </div>
          </div>
          <div class="contacts-block">
            <img class="icon-contacts" alt="заглушка" src="/misc/images/cap3.png" />
            <div class="icon-text icon-text-edit2">
              ЕтноІдея. Київ Україна
            </div>
          </div>
          <div class="contacts-block">
            <img class="icon-contacts" alt="заглушка" src="/misc/images/@.png" />
            <div class="icon-text">
              e-mail: ethnoidea@gmail.com
            </div>
          </div>
        </div>

        <div class="contacts-wrapper-bottom">
          <div class="social-networks-title">
            Наші спільноти в <div>соціальних мережах</div>
          </div>
          <a href="http://instagram.com/ethnoidea"><div class="footer-instagram"></div></a>
          <a href="#"><div class="footer-pinterest"></div></a>
          <a href="https://www.facebook.com/ethnoidea"><div class="footer-fb"></div></a>
        </div>

      </div>
    </div>

    <div id="navigation">
      <?php print render($page['navigation']); ?>
    </div>
  </div>
   <?php print render($page['sidebar_first']); ?>

    <?php print render($page['sidebar_second']); ?>
  </div>


<footer>
  <?php print render($page['footer']); ?>

  <div class="footer-wrapper">
    <div class="footer-logo"></div>
    <div class="footer-trademark-text">
      ЕтноІдея Tm <div class="footer-trademark-text-edit">Copyright @ 2015</div>
    </div>
    <!--<div class="lok-logo"></div>-->
  </div>
</footer>  

</div>
</div>

<?php print render($page['bottom']); ?>