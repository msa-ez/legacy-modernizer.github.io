<template>
  <div>
    <!-- <div class="py-2 border-t-2 border-ui-primary">
      <div class="container">
        <div class="layout">
          <header class="header">
            <div class="container flex-between">
              <div class="logo">
                <g-link to="/">Legacy Modernizer</g-link>
              </div>
              <nav class="nav">
                <a class="nav-link" href="#intro">소개</a>
                <a class="nav-link" href="#features">기능</a>
                <a class="nav-link" href="#how-it-works">작동방식</a>
                <a class="nav-link" href="#get-started">시작하기</a>
              </nav>
            </div>
          </header>

        </div>
      </div>
    </div> -->

    <!-- <ContactFormModal ref="contactForm" /> -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      web
      github
      twitter
      nav {
        links {
          path
          title
        }
      }
    }
  }
}
</static-query>

<script>
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from '@/components/Logo';
import { SunIcon, MoonIcon, GlobeIcon, GithubIcon, TwitterIcon } from "vue-feather-icons";
import ContactFormModal from '@/components/ContactFormModal';

const Search = () => import(/* webpackChunkName: "search" */ "@/components/Search").catch(error => console.warn(error));

export default {
  components: {
    Logo,
    Search,
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    GlobeIcon,
    GithubIcon,
    TwitterIcon,
    ContactFormModal
  },
  data() {
    return {
      currentUrl: null,
      currentPath: null,
      currentPathTwo: null
    };
  },

  computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    },
  },

  methods: {
    languageExchange() {
      var me = this
      
      me.currentUrl = window.location.pathname;
      me.currentPath = me.currentUrl.split("/")[1];
      me.currentPathTwo = me.currentUrl.split("/")[2];
      
      if(me.currentPath != null && me.currentPathTwo != null) {
        window.location.href="https://intro.msaez.io/" + me.currentPath + "/" + me.currentPathTwo;
      }else {
        window.location.href="https://intro.msaez.io/";
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
/* @import '../assets/styles/global.css'; */

.header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
}

.header .container {
  flex-direction: row;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo a {
  color: var(--dark-color);
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--dark-color);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav {
    justify-content: center;
  }
}
</style>