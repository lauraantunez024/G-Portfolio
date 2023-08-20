<template>
  <div>
    <AboutMe />
    <ServicesList :title="Services[0].title"/>
    <ServicesList :title="Services[1].title"/>
    <ServicesList :title="Services[2].title"/>

    <MyTestimonials />

  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import MyTestimonials from '../components/MyTestimonials.vue';
import ServicesList from '../components/ServicesList.vue';

export default {
  data() {
    return {
      Services: [
        {
          title: 'Film Making',
          descriptionTiles: [
            {
              text: 'Writing/Directing',
              details: [
                'Wrote X number of screen plays',
                'Directed XYZ'
              ]
            },
            {
              text: 'First Film Degree from Augusta University',
              details: [
                'Graduated December 2023 with a degree in XXX',
                'Screened a XXX minute long movie',
                'Won a Telly for a cigarette commercial'
              ]
            },
            {
              text: 'Adobe Suite',
              details: [
                'Hates after effects so much',
                'Likes premiere i guess?'
              ]
            }
          ]
        },
        {
          title: 'Social Media/ Marketing',
          descriptionTiles: [
            {
              text: 'Graphic Design',
              details: [
                'Programs you know',
                "# of social media posts you've done"
              ]
            },
            {
              text: 'SEO Certified',
              details: [
                'Date of Completion',
                'Something you learned?'
              ]
            },
            {
              text: 'Office Babe',
              details: [
                'Cutest',
                'Best Cat Secretaries'
              ]
            }
          ]
        },
        {
          title: 'Audio Engineering',
          descriptionTiles: [
            {
              text: 'Thing 1',
              details: [
                'detail 1',
                'detail 2',
                'detail 3'
              ]
            },
            {
              text: 'Thing 2',
              details: [
                'detail 1',
                'detail 2',
                'detail 3'
              ]
            },
            {
              text: 'Thing 3',
              details: [
                'detail 1',
                'detail 2',
                'detail 3'
              ]
            }
          ]

        }
      ]





    }
  },
  components: {
    AboutMe,
    MyTestimonials,
    ServicesList
  }
}
</script>

<style scoped></style>