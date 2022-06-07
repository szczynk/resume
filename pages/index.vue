<template>
  <el-container class="resume-container">
    <el-main id="main" class="resume-main-container">
      <!-- Header -->
      <div class="resume-main-container-2 resume-header">
        <el-row>
          <el-col :span="12">
            <div class="header-left">
              <h1 id="name">
                {{ header.name ? header.name : "Anonymous" }}
              </h1>
              <h2 id="title">
                {{ header.title ? header.title : "Hacker" }}
              </h2>
            </div>
          </el-col>
          <el-col :span="12">
            <div style="header-right">
              <ul class="icons">
                <li v-if="header.github_username" id="icons-github">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'https://www.github.com/' + header.github_username"
                    :title="'https://www.github.com/' + header.github_username"
                  >
                    <FaIcon :icon="['fab', 'github']" title="Github link" />
                  </a>
                </li>
                <li v-if="header.linkedin_username" id="icons-linkedin">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="
                      'https://www.linkedin.com/in/' + header.linkedin_username
                    "
                    :title="
                      'https://www.linkedin.com/in/' + header.linkedin_username
                    "
                  >
                    <FaIcon :icon="['fab', 'linkedin']" title="Linkedin link" />
                  </a>
                </li>
                <li v-if="header.twitter_username" id="icons-twitter">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'https://twitter.com/' + header.twitter_username"
                    :title="'https://twitter.com/' + header.twitter_username"
                  >
                    <FaIcon :icon="['fab', 'twitter']" title="Twitter link" />
                  </a>
                </li>
                <li v-if="header.email" id="icons-email">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'mailto:' + header.email"
                    :title="'mailto:' + header.email"
                  >
                    <FaIcon icon="at" title="Email link" />
                  </a>
                </li>
                <li v-if="header.phone" id="icons-phone">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'tel:' + header.phone"
                    :title="'tel:' + header.phone"
                  >
                    <FaIcon icon="phone-alt" title="Phone link" />
                  </a>
                </li>
                <li v-if="header.skype_username" id="icons-skype">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'skype:' + header.skype_username + '?userinfo'"
                    :title="'skype:' + header.skype_username + '?userinfo'"
                  >
                    <FaIcon :icon="['fab', 'skype']" title="Skype link" />
                  </a>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- Header -->
      <!-- About -->
      <div
        v-if="about.about_content"
        class="resume-main-container-2 resume-about"
      >
        <h3 id="about-title">
          {{ about.about_title ? about.about_title : "About Me" }}
        </h3>
        <el-row v-if="about.about_profile_image">
          <el-col :span="6" :xs="8">
            <p>
              <el-avatar
                id="about-profile-image"
                shape="circle"
                fit="fill"
                :src="about.about_profile_image"
                :alt="'Szczynk Resume' + about.about_profile_image"
              />
            </p>
          </el-col>
          <el-col :span="18" :xs="16">
            <!-- eslint-disable-next-line -->
            <p id="about-content" v-html="about.about_content" />
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col :span="24">
            <!-- eslint-disable-next-line -->
            <p id="about-content" v-html="about.about_content" />
          </el-col>
        </el-row>
      </div>
      <!-- About -->
      <!-- Projects -->
      <div
        v-if="projectsData.projects"
        class="resume-main-container-2 resume-projects"
      >
        <h3 id="project-title">
          {{
            projectsData.projects_title
              ? projectsData.projects_title
              : "Projects"
          }}
        </h3>
        <el-card
          v-for="(project, index) in projectsData.projects"
          :key="index"
          :data="project"
          :index="index"
        >
          <div slot="header" style="text-align: center">
            <el-link :href="project.link" :title="project.link">
              <FaIcon :icon="['fab', 'github']" />
              {{ project.name }}
            </el-link>
          </div>
          <!-- eslint-disable-next-line -->
          <div v-html="project.description" />
        </el-card>
      </div>
      <!-- Projects -->
      <!-- Experience -->
      <div
        v-if="experiencesData.experiences"
        class="resume-main-container-2 resume-exps"
      >
        <h3 id="experience-title">
          {{
            experiencesData.experiences_title
              ? experiencesData.experiences_title
              : "Work experience"
          }}
        </h3>
        <el-card
          v-for="(experience, index) in experiencesData.experiences"
          :key="index"
          :data="experience"
          :index="index"
          class="experience-card"
        >
          <div slot="header" style="text-align: center">
            <el-link :href="experience.work_link" :title="experience.work_link">
              {{ experience.job_title }}
            </el-link>
            <p>{{ experience.dates }}</p>
            <el-link :href="experience.company_link" :title="experience.company_link">
              <FaIcon :icon="['far', 'building']" />
              {{ experience.company }}
            </el-link>
            <el-divider direction="vertical" />
            <FaIcon icon="map-marker-alt" /> {{ experience.place }}
          </div>
          <!-- eslint-disable-next-line -->
          <div v-html="experience.description" />
        </el-card>
      </div>
      <!-- Experience -->
      <!-- Education -->
      <div
        v-if="educationsData.educations"
        class="resume-main-container-2 resume-edus"
      >
        <h3 id="education-title">
          {{
            educationsData.educations_title
              ? educationsData.educations_title
              : "Education"
          }}
        </h3>
        <el-timeline>
          <el-timeline-item
            v-for="(education, index) in educationsData.educations"
            :key="index"
            :timestamp="education.dates"
            placement="top"
          >
            <el-card>
              <h4>
                {{ education.name }}
                <el-divider direction="vertical" />
                <span>
                  <FaIcon icon="map-marker-alt" />
                  {{ education.place }}
                </span>
              </h4>
              <p>{{ education.qualification }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <!-- Education -->
      <!-- Hobbies -->
      <div
        v-if="hobbies.hobbies_content"
        class="resume-main-container-2 resume-hobbies"
      >
        <h3 id="hobbies-title">
          {{
            hobbies.hobbies_title
              ? hobbies.hobbies_title
              : "Activities and interests"
          }}
        </h3>
        <el-card id="hobbies-content">
          {{ hobbies.hobbies_content }}
        </el-card>
      </div>
      <!-- Hobbies -->
    </el-main>
    <div class="corner-ribbon top-right sticky no-print" @click="print()">
      Print me
    </div>
    <el-footer>
      <gh-btns-star slug="szczynk/resume" />
    </el-footer>
  </el-container>
  <!-- @sproogen thanks for inspiration -->
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const header = await $content('resume/header')
      .fetch()
      .catch((err) => {
        throw new Error(err)
      })

    const about = await $content('resume/about')
      .fetch()
      .catch((err) => {
        throw new Error(err)
      })

    const projectsData = await $content('resume/projects')
      .fetch()
      .catch((err) => {
        throw new Error(err)
      })

    const experiencesData = await $content('resume/experiences')
      .fetch()
      .catch((err) => {
        throw new Error(err)
      })

    const educationsData = await $content('resume/educations')
      .fetch()
      .catch((err) => {
        throw new Error(err)
      })

    const hobbies = await $content('resume/hobbies')
      .fetch()
      .catch((err) => {
        throw new Error(err)
      })

    return {
      header,
      about,
      projectsData,
      experiencesData,
      educationsData,
      hobbies
    }
  },
  head () {
    const head = {
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'WebSite',
            name: 'Szczynk Resume',
            headline: 'Szczynk Resume',
            description: 'Szczynk Resume',
            url: 'https://szczynk.github.io/resume/'
          }
        }
      ],
      meta: [
        {
          hid: 'github-repo',
          name: 'github-repo',
          property: 'github-repo',
          content: 'szczynk/resume'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          property: 'twitter:url',
          content: 'https://szczynk.github.io/resume/'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          property: 'twitter:title',
          content: 'Szczynk Resume'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: 'Szczynk Resume'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://szczynk.github.io/resume/_nuxt/icons/icon_120x120.2cde48.png'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content:
            'https://szczynk.github.io/resume/_nuxt/icons/icon_120x120.2cde48.png'
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Szczynk Resume'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          property: 'canonical',
          href: 'https://szczynk.github.io/resume/'
        }
      ]
    }

    return head
  },
  methods: {
    print () {
      window.print()
    }
  }
}
</script>
