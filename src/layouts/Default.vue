<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <div class="logo">
          <g-link to="/">Legacy Modernizer</g-link>
        </div>
        <nav class="nav">
          <g-link class="nav-link" to="/#intro" @click.native="scrollToSection('intro')">소개</g-link>
          <!-- <a class="nav-link" href="#features">기능</a> -->
          <g-link class="nav-link" to="/#how-it-works" @click.native="scrollToSection('how-it-works')">작동 방식</g-link>
          <g-link class="nav-link" to="/#get-started" @click.native="scrollToSection('get-started')">시작하기</g-link>
          <g-link class="nav-link" to="/started/how-to-use/">
            사용 방법
          </g-link>
          <g-link class="nav-link" to="/#contact" @click.native="scrollToSection('contact')">문의하기</g-link>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '@/components/Footer';

export default {
  components: {
    Footer
  },
  methods: {
    scrollToSection(sectionId) {
      this.$nextTick(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTitle = element.querySelector('.section-title');
          if (sectionTitle) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = sectionTitle.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    }
  }
}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1400px; */
  margin: 0 auto;
  padding: 0px 5%;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
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
/* 
.footer {
  background-color: var(--dark-color);
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-copyright {
  font-size: 0.875rem;
  color: var(--gray-color);
} */

@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .nav {
    flex-direction: row;
    /* align-items: center; */
    width: 100%;
  }
}
</style>


<!-- <template>
  <div class="antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen">

      <header
        ref="header"
        class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
        @resize="setHeaderHeight"
      >
        <LayoutHeader />
      </header>

      <main class="container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background">
        <aside
          v-if="hasSidebar"
          class="sidebar flex-1 w-1/6"
          :class="{ 'open': sidebarOpen }"
          :style="sidebarStyle"
        >
          <div class="w-full pb-16 bg-ui-background">
            <Sidebar class="pb-8" @navigate="sidebarOpen = false" @closeSidebar="sidebarOpen = false" />
          </div>
        </aside>
        
        <div
          class="w-full pb-24"
          :class="{'pl-0 lg:pl-12 lg:w-5/6': hasSidebar}"
        >
          <slot />
        </div>
      </main>
    </div>

    <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
      <button class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white" @click="sidebarOpen = ! sidebarOpen">
        <XIcon v-if="sidebarOpen" />
        <MenuIcon v-else />
      </button>
    </div>
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar";
import LayoutHeader from "@/components/LayoutHeader";
import { MenuIcon, XIcon } from 'vue-feather-icons';
import Footer from '@/components/Footer';

export default {
  components: {
    Sidebar,
    LayoutHeader,
    MenuIcon,
    XIcon,
    Footer
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false,
      homeFooterNone: false,
    }
  },
  mounted() {
    this.setHeaderHeight();
    window.addEventListener('resize', this.setHeaderHeight);
    this.addCopyButtons();
  },
  watch: {
    sidebarOpen: function(isOpen) {
      document.body.classList.toggle('overflow-hidden', isOpen);
    },
    '$route.path': function(newPath, oldPath) {
      console.log(`Path changed from ${oldPath} to ${newPath}`);
      this.addCopyButtons();
    }
  },
  methods: {
    addCopyButtons() {
        this.$nextTick(() => {
            const existingButtons = document.querySelectorAll('.copy-button');
            existingButtons.forEach(button => button.remove());

            const codeBlocks = document.querySelectorAll('pre');
            codeBlocks.forEach((pre, index) => {

                const wrapper = document.createElement('div');
                wrapper.classList.add('pre-wrapper');
                pre.parentNode.insertBefore(wrapper, pre);
                wrapper.appendChild(pre);

                const button = document.createElement('button');
                button.innerHTML = '<img style="width:22px; height:22px;" src="https://github.com/user-attachments/assets/13d31ea7-d3a6-48ef-86a6-5aacfdd801aa" alt="Copy" />';
                button.className = 'copy-button';
                button.style.position = 'absolute';
                button.style.top = '8px';
                button.style.right = '8px';
                button.style.zIndex = '10';
                button.style.background = 'none';
                button.style.border = 'none';
                button.addEventListener('click', () => this.copyCode(pre.querySelector('code')));
                wrapper.style.position = 'relative';
                wrapper.appendChild(button);
            });
        });
    },
    copyCode(block) {
        const text = block.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('복사되었습니다. ctrl + v 붙여넣기');
        });
    },
    setHeaderHeight() {
        this.$nextTick(() => {
            this.headerHeight = this.$refs.header.offsetHeight;
        });
    },
  },
  computed: {
    sidebarStyle() {
        return {
            top: this.headerHeight + 'px',
            height: `calc(100vh - ${this.headerHeight}px)`,
        }
    },
    hasSidebar() {
      return this.$page && this.headerHeight > 0;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setHeaderHeight);
  },
  metaInfo() {
    return {
      meta: [
        {
          key: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: process.env.SITE_URL + '/logo.jpg',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: process.env.SITE_URL + '/logo.jpg',
        },
      ]
    }
  }
};
</script>

<style lang="scss">
:root {
  --color-ui-background: theme('colors.white');
  --color-ui-typo: theme('colors.gray.700');
  --color-ui-sidebar: theme('colors.gray.200');
  --color-ui-border: theme('colors.gray.300');
  --color-ui-primary: theme('colors.indigo.600');
}

html[lights-out] {
  --color-ui-background: theme('colors.gray.900');
  --color-ui-typo: theme('colors.gray.100');
  --color-ui-sidebar: theme('colors.gray.800');
  --color-ui-border: theme('colors.gray.800');
  --color-ui-primary: theme('colors.indigo.500');

  pre[class*="language-"],
  code[class*="language-"] {
    @apply bg-ui-border;
  }
}

* {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}

h1,
h2,
h3,
h4 {
  @apply leading-snug font-black mb-4 text-ui-typo;

  &:hover {
    a::before {
      @apply opacity-100;
    }
  }

  a {
    &::before {
      content: "#";
      margin-left: -1em;
      padding-right: 1em;
      @apply text-ui-primary absolute opacity-0 float-left;
    }
  }
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

a:not(.active):not(.text-ui-primary):not(.text-white) { @apply text-ui-typo }

p,
ol,
ul,
pre,
strong,
blockquote {
  @apply mb-4 text-base text-ui-typo;
}

.content {
  a {
    @apply text-ui-primary underline;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply -mt-12 pt-20;
  }
    
  h2 + h3,
  h2 + h2,
  h3 + h3 {
    @apply border-none -mt-20;
  }

  h2,
  h3 {
    @apply border-b border-ui-border pb-1 mb-3;
  }

  ul {
    @apply list-disc;

    ul {
      list-style: circle;
    }
  }

  ol {
    @apply list-decimal;
  }

  ol,
  ul {
    @apply pl-5 py-1;

    li {
      @apply mb-2;
      overflow-wrap: break-word;

      p {
        @apply mb-0;
        overflow-wrap: break-word;
      }

      &:last-child {
        @apply mb-0;
      }
    }
  }
}

div {
  overflow-wrap: break-word;
}

blockquote {
  @apply border-l-4 border-ui-border py-2 pl-4;

  p:last-child {
    @apply mb-0;
  }
}

code {
  @apply px-1 py-1 text-ui-typo bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded;
}

pre[class*="language-"] {
  @apply max-w-full overflow-x-auto rounded;

  & + p {
    @apply mt-4;
  }

  & > code[class*="language-"] {
    @apply border-none leading-relaxed;
  }
}

header {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
}

table {
  @apply text-left mb-6;

  td, th {
    @apply py-3 px-4;
    &:first-child {
      @apply pl-0;
    }
    &:last-child {
      @apply pr-0;
    }
  }

  tr {
    @apply border-b border-ui-border;
    &:last-child {
      @apply border-b-0;
    }
  }
}

.sidebar {
  @apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto transition-all z-40;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }

  @screen lg {
    @apply w-1/4 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
    transform: translateX(0);
  }
}

</style> -->
