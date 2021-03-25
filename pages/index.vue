<template>
  <el-container class="resume-container">
    <!-- Header -->
    <el-main id="main" class="resume-main-container">
      <div class="resume-main-container-2">
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
                  >
                    <i><FaIcon :icon="['fab','github']" title="Github link" /></i>
                  </a>
                </li>
                <li v-if="header.linkedin_username" id="icons-linkedin">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="
                      'https://www.linkedin.com/in/' + header.linkedin_username
                    "
                  >
                    <i><FaIcon :icon="['fab','linkedin']" title="Linkedin link" /></i>
                  </a>
                </li>
                <li v-if="header.twitter_username" id="icons-twitter">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'https://twitter.com/' + header.twitter_username"
                  >
                    <i><FaIcon :icon="['fab','twitter']" title="Twitter link" /></i>
                  </a>
                </li>
                <li v-if="header.email" id="icons-email">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'mailto:' + header.email"
                  >
                    <i><FaIcon icon="at" title="Email link" /></i>
                  </a>
                </li>
                <li v-if="header.phone" id="icons-phone">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'tel:' + header.phone"
                  >
                    <i><FaIcon icon="phone-alt" title="Phone link" /></i>
                  </a>
                </li>
                <li v-if="header.skype_username" id="icons-skype">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    :href="'skype:' + header.skype_username + '?userinfo'"
                  >
                    <i><FaIcon :icon="['fab','skype']" title="Skype link" /></i>
                  </a>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- Header -->
      <!-- About -->
      <div v-if="about.about_content" class="resume-main-container-2">
        <h3 id="about-title">
          {{ about.about_title ? about.about_title : "About Me" }}
        </h3>
        <el-row v-if="about.about_profile_image">
          <el-col :span="6">
            <p>
              <el-avatar
                id="about-profile-image"
                shape="circle"
                fit="fill"
                :src="about.about_profile_image"
                :alt="'about_profile_image ' + about.about_profile_image"
              />
            </p>
          </el-col>
          <el-col :span="18">
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
      <div v-if="projectsData.projects" class="resume-main-container-2">
        <h3 id="project-title">
          {{
            projectsData.projects_title ? projectsData.projects_title : "Projects"
          }}
        </h3>
        <el-card
          v-for="(project, index) in projectsData.projects"
          :key="index"
          :data="project"
          :index="index"
        >
          <div slot="header" style="text-align: center;">
            <el-link :href="project.link">
              <i><FaIcon :icon="['fab','github']" /></i>
              {{ project.name }}
            </el-link>
          </div>
          <!-- eslint-disable-next-line -->
      <div v-html="project.description" />
        </el-card>
      </div>
      <!-- Projects -->
      <!-- Experience -->
      <div v-if="experiencesData.experiences" class="resume-main-container-2">
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
        >
          <div slot="header" style="text-align:center;">
            <el-link :href="experience.link">
              <i><FaIcon :icon="['far','building']" /></i>
              {{ experience.company }}
            </el-link>
            <el-divider direction="vertical" />
            <i><FaIcon icon="map-marker-alt" /></i> {{ experience.place }}
            <p>{{ experience.dates }}</p>
            <p>{{ experience.job_title }}</p>
          </div>
          <!-- eslint-disable-next-line -->
          <div v-html="experience.description" />
        </el-card>
      </div>
      <!-- Experience -->
      <!-- Education -->
      <div v-if="educationsData.educations" class="resume-main-container-2">
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
                  <i><FaIcon icon="map-marker-alt" /></i>
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
      <div v-if="hobbies.hobbies_content" class="resume-main-container-2">
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
    <div
      class="corner-ribbon top-right sticky no-print"
      @click="print()"
    >
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
  methods: {
    print () {
      window.print()
    }
  }
}
</script>
