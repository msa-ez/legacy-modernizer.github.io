<template>
    <div>
        <!-- 원본 색상 코드 #1E88E5 -->
        <div style="width:100%; padding-bottom:30px; background-color:var(--legacy-bg-color);"> 
            <div class="flex logo-style">
                <div>
                    <g-image src="../img/uEngine_logo.png"></g-image>
                </div>
            </div>
            <div style = "width:100%; text-align:center; font-size:14px; color:white; font-weight:300; line-height:1.5; padding-top:20px;">
                <div>
                    <div>
                        <div class="footer-top-div">© Legacy Modernizer Authors 2025.&nbsp;&nbsp;</div>
                        <div class="footer-top-div">© 2025 uEngine All rights reserved.</div>
                    </div>
                    <div>
                        uEngine has registered trademarks and uses trademarks.
                         <!-- and MSA-Ez is licensed under the GNU General Public License version 3.0. -->
                    </div>
                </div>
                <div class="footer-bot">
                    <!-- <div>
                        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" style="color:#fff;" target="_blank">
                            See LICENSE
                        </a>
                        &nbsp; | &nbsp;&nbsp;
                    </div>
                    <div>
                        <a href="https://github.com/msa-ez/platform" style="color:#fff;" target="_blank">
                            Github Site
                        </a>
                        &nbsp; | &nbsp;&nbsp;
                    </div> -->
                    <div>E-Mail: help@uengine.org</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.logo-style{
  width: 10%; 
  margin-left: 45%;  
  padding-top: 30px;
}
.footer-top-div {
    display: inline-block;
}
.footer-bot {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

@media only screen and (max-width:1279px) {
    .logo-style{
      width: 15%; 
      margin-left: 42.5%;  
      padding-top: 30px;
    }
    .footer-top-div {
        display: block;
    }
    .footer-bot {
        display: block;
    }
}

@media (max-width: 768px) {
    .logo-style{
      width: 30%; 
      margin: 0 auto;
      padding-top: 30px;
    }
}
</style>