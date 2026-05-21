const hamburger =
  document.getElementById(
    "hamburger",
  );
const navLinks =
  document.getElementById(
    "navLinks",
  );

/* MOBILE MENU */

hamburger.addEventListener(
  "click",
  () => {
    navLinks.classList.toggle(
      "active",
    );
  },
);

/* SEARCH */

const searchInput =
  document.getElementById(
    "searchInput",
  );
const cards =
  document.querySelectorAll(
    ".item",
  );

searchInput.addEventListener(
  "input",
  () => {
    const searchValue =
      searchInput.value.toLowerCase();

    cards.forEach(
      (
        card,
      ) => {
        const title =
          card
            .querySelector(
              "h3",
            )
            ?.textContent.toLowerCase() ||
          "";

        const desc =
          card
            .querySelector(
              "p",
            )
            ?.textContent.toLowerCase() ||
          "";

        const text =
          title +
          " " +
          desc;

        if (
          text.includes(
            searchValue,
          )
        ) {
          card.style.display =
            "block";
        } else {
          card.style.display =
            "none";
        }
      },
    );
  },
);

/* SMOOTH SCROLL */

document
  .querySelectorAll(
    'a[href^="#"]',
  )
  .forEach(
    (
      link,
    ) => {
      link.addEventListener(
        "click",
        function (
          e,
        ) {
          e.preventDefault();

          const target =
            document.querySelector(
              this.getAttribute(
                "href",
              ),
            );

          if (
            target
          ) {
            target.scrollIntoView(
              {
                behavior:
                  "smooth",
              },
            );

            navLinks.classList.remove(
              "active",
            );
          }
        },
      );
    },
  );

/* SUBSCRIBE BUTTON */

const subscribeBtn =
  document.getElementById(
    "subscribeBtn",
  );

subscribeBtn.addEventListener(
  "click",
  () => {
    alert(
      "Welcome to Filmland!",
    );
  },
);

/* NEWSLETTER */

const newsletterBtn =
  document.getElementById(
    "newsletterBtn",
  );

newsletterBtn.addEventListener(
  "click",
  () => {
    const email =
      document.getElementById(
        "emailInput",
      );

    if (
      email.value ===
      ""
    ) {
      alert(
        "Please enter your email",
      );
    } else {
      alert(
        "Subscription successful!",
      );

      email.value =
        "";
    }
  },
);
