document.addEventListener("DOMContentLoaded", function () {
  function addFlames(wrapper) {
    for (let i = 0; i < 30; i++) {
      const flamer = document.createElement('div');
      flamer.classList.add('flamer');
      flamer.style.top = `${Math.random() * 100}%`;
      flamer.style.left = `${Math.random() * 100}%`;
      wrapper.appendChild(flamer);
    }
  }

  function removeFlames(wrapper) {
    const flamers = wrapper.querySelectorAll('.flamer');
    flamers.forEach(flamer => wrapper.removeChild(flamer));
  }
});
