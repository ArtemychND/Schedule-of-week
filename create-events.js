(function() {

  class CreateEvents {
    constructor() {
      this.form = document.querySelector('#form');
      this.events = JSON.parse(localStorage.getItem('events')) || [];
      this.form.onsubmit = this.formActive.bind(this);
    }

    formActive(e) {
      if(e) {
        e.preventDefault()
        const elements = e.target.elements;
        let obj = {};
        for(let i = 0; i < elements.length; i++) {
          let item = elements[i];
          if(item.id) {
            obj[item.id] = item.value;
          }
        }
        let event = this.events.find((el) => el.day === obj.day && el.time === obj.time);
        if(event) {
          alert('This time is busy, please, choose another time of event!')
        } else {
          this.events.push(obj);
          localStorage.setItem('events', JSON.stringify(this.events));
          window.location.href = './index.html';c
        }
      }
    }
  }
  new CreateEvents().formActive()
})()

