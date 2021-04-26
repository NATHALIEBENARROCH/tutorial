let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.to("text", 2, {x:500}).to("content-images", 2, {opacity:0}, '-=2');

timeline
.to('.boat', 3, { y:-300 })
.to('.man', 3, { y: 220 },'-=3')
.fromTo('.bg1', { y:-50 },{ y: 0, duration: 3 },'-=3')
.to('.content', 3,{ top:"50%" },'-=3')
// .fromTo(".content-images",{ y: 100 },{ y: 0, duration: 3 },'-=3')
.fromTo(".content-images", {opacity: 0},{opacity: 1, duration: 2 })
.fromTo(".text", {x: -300}, {x:100, duration:2 });

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration:"200%",
    triggerHook: 0,
    // (starts as soon as you start scrolling from 0 point)
})
.setTween(timeline)
.setPin()
.addTo(controller);


// function saySomething() {
//     console.log("Hello World");
//   }
// saySomething() 

// var len = $('script[src="<external JS>"]').length;
// console.log(len);

// function loadScript( url, callback ) {
//     var script = document.createElement( "script" )
//           script.type = "text/javascript";
//          script.onload = function() {
//            callback()
//         };
//   }
//   // call the function...
//   loadScript("script.js", function() {
//     alert('script ready!'); 
//   });