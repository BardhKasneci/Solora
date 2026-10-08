document.addEventListener('DOMContentLoaded', () => {
      const checkbox = document.getElementById('billing-checkbox');
      const labelMonthly = document.getElementById('label-monthly');
      const labelOnetime = document.getElementById('label-onetime');
      
      const priceVals = document.querySelectorAll('.price-val');
      const priceSuffixes = document.querySelectorAll('.price-suffix');

      labelMonthly.addEventListener('click', () => {
          checkbox.checked = false;
          updatePricing();
      });

      labelOnetime.addEventListener('click', () => {
          checkbox.checked = true;
          updatePricing();
      });

      checkbox.addEventListener('change', updatePricing);

      function updatePricing() {
          if (checkbox.checked) {
              labelMonthly.classList.remove('active');
              labelOnetime.classList.add('active');
              
              priceVals.forEach(el => {
                  el.textContent = el.getAttribute('data-onetime');
              });
              priceSuffixes.forEach(el => {
                  el.textContent = ' one-time';
              });
          } else {
              labelOnetime.classList.remove('active');
              labelMonthly.classList.add('active');
              
              priceVals.forEach(el => {
                  el.textContent = el.getAttribute('data-monthly');
              });
              priceSuffixes.forEach(el => {
                  el.textContent = '/month';
              });
          }
      }
  });
