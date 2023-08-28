<template>
  <div>
    <TransitionSlide title="About Me"/>
    <AboutMe />
    <TransitionSlide title="Services List"/>
    <ServicesList v-for="service in services" :key="service.id" :title="service.title"
      :firstBullet="service.descriptionTiles[0].text" :secondBullet="service.descriptionTiles[1].text"
      :thirdBullet="service.descriptionTiles[2].text" :firstDetails="service.descriptionTiles[0].details"
      :secondDetails="service.descriptionTiles[1].details" :thirdDetails="service.descriptionTiles[2].details" />
      <TransitionSlide title="Testimonials!"/>
    <MyTestimonials />

  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import MyTestimonials from '../components/MyTestimonials.vue';
import ServicesList from '../components/ServicesList.vue';
import TransitionSlide from '../components/TransitionSlide.vue';


export default {
  data() {
    return {
      services: [
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
              text: 'Film Degree from AU',
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
    ServicesList,
    TransitionSlide
}
}
</script>

<style scoped>

</style>