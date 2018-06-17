new Vue({
  el: '#app',
  data: function data() {
    return {
      x: 0,
      y: 0
    };
  },

  methods: {
    wave: function wave() {
      var arm = new TimelineMax({
        paused: true
      });

      arm.add('startwave');
      arm.staggerFromTo('#rainbow path', 6, {
        opacity: 0,
        x: 30,
        drawSVG: false
      }, {
        opacity: 1,
        x: -30,
        drawSVG: '110%',
        ease: Sine.easeInOut
      }, 0.1, 'startwave+=1');
      arm.fromTo('#midground', 6, {
        x: -600
      }, {
        x: 0,
        ease: Sine.easeInOut
      }, 'startwave+=1');
      arm.fromTo('#boat', 6, {
        x: 30
      }, {
        x: -30,
        ease: Sine.easeInOut
      }, 'startwave+=1');

      return arm;
    },
    coordinates: function coordinates(e) {
      var move = e.clientX / window.innerWidth;
      this.wave().progress(move);
    }
  },
  mounted: function mounted() {
    var tl = new TimelineMax();

    tl.to('#feturb', 20, {
      attr: {
        baseFrequency: 0.04 + ' ' + 0.1
      },
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone
    }, 'start');
    tl.fromTo('#boat', 2, {
      y: 6,
      rotation: 0
    }, {
      y: 6,
      rotation: 6,
      repeat: -1,
      yoyo: true,
      transformOrigin: '45% 100%'
    }, 'start');
    tl.to('#tail', 1, {
      rotation: 10,
      repeat: -1,
      ease: Circ.easeOut
    }, 'start');
    tl.to('#legs-back', 0.3, {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeOut
    }, 'start');
    tl.to('#legs-front', 0.3, {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeOut
    }, 'start');
    tl.to('#arm', 1, {
      attr: {
        d: 'M 517 265 q 15 0 25 -15 q 20 -20 20 0 Q 550 285 510 300'
      },
      repeat: -1,
      yoyo: true
    });
  }
});