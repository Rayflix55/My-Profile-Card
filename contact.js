 function submitForm(e) {
          e.preventDefault();
          fetch(e.target.action, {
        method: 'POST',
        body: new FormData(e.target)
          }).then(() => {
        window.location.href = 'thanks.html';
          });
          return false;
        }