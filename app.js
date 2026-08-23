/**
 * ONE STAY PG - Interactive Website Script
 * Features:
 * - Sticky Header with Glass Blur on scroll
 * - Rooms Carousel Slider (Desktop & Touch)
 * - Testimonial Reviews Slider
 * - Filterable Photo Gallery & Lightbox Viewer
 * - Schedule a Visit Modal & Form Submission with Live Toast
 * - Day-by-Day Homely Food Menu Modal
 * - Room Details & Pricing Modal
 * - Google Map Location Modal
 * - Mobile Navigation Drawer & Bottom Navigation Active Tracking
 */

// ==========================================================================
// 1. DATA STRUCTURES (Weekly Animated Carousel, Food Menu & Room Details)
// ==========================================================================

const WEEKLY_CAROUSEL_DATA = [
  {
    day: 'Monday',
    meals: [
      {
        type: 'Breakfast',
        title: 'Idli, Vada, Sambar, Chutney',
        desc: 'Soft hot steamed idlis, crispy medu vada, spiced sambar & fresh coconut chutney.',
        image: 'images/monday_breakfast.jpg'
      },
      {
        type: 'Lunch',
        title: 'Rice, Sambar, Pappad, Vegetable',
        desc: 'Steamed Sona Masoori rice, authentic drumstick sambar, crispy pappad & seasonal vegetable palya.',
        image: 'images/monday_lunch.jpg'
      },
      {
        type: 'Dinner',
        title: 'Rice, Chicken Curry, Sambar',
        desc: 'Hot steamed rice, rich flavorful coastal chicken curry (or veg paneer curry) & aromatic sambar.',
        image: 'images/monday_dinner.png'
      }
    ]
  },
  {
    day: 'Tuesday',
    meals: [
      {
        type: 'Breakfast',
        title: 'Puri, Sagu',
        desc: 'Fresh golden fluffy pooris served with authentic aromatic vegetable sagu & tea/coffee.',
        image: 'images/tuesday_breakfast.png'
      },
      {
        type: 'Lunch',
        title: 'Rice, Dal, Vegetable',
        desc: 'Hot white rice, homestyle dal tadka, fresh stir-fried vegetables, curd & pickle.',
        image: 'images/tuesday_lunch.png'
      },
      {
        type: 'Dinner',
        title: 'Parotta, Chicken Curry',
        desc: 'Flaky layered Kerala parottas with rich Mangalorean chicken gravy / veg kurma & rice.',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    day: 'Wednesday',
    meals: [
      {
        type: 'Breakfast',
        title: 'Dosa, Sambar, Chutney',
        desc: 'Crispy golden roasted dosa with fresh coconut chutney & piping hot vegetable sambar.',
        image: 'images/dosa_chutney.jpg'
      },
      {
        type: 'Lunch',
        title: 'Rice, Sambar, Pappad, Vegetable',
        desc: 'Steamed rice, traditional lentil sambar, roasted pappad, mixed vegetable upkari & buttermilk.',
        image: 'images/wednesday_lunch.png'
      },
      {
        type: 'Dinner',
        title: 'Rice, Dal Kebab, Thoran, Sagu',
        desc: 'Steamed rice, crispy seasoned dal kebabs, Kerala-style coconut thoran & savory vegetable sagu.',
        image: 'images/wednesday_dinner.png'
      }
    ]
  },
  {
    day: 'Thursday',
    meals: [
      {
        type: 'Breakfast',
        title: 'Dosa, Sambar, Chutney',
        desc: 'Soft and crispy dosa served with freshly ground chutney, sambar & hot beverage.',
        image: 'images/dosa_chutney.jpg'
      },
      {
        type: 'Lunch',
        title: 'Rice, Sambar, Pappad, Vegetable',
        desc: 'Nutritious steamed rice, fresh vegetable sambar, crunchy roasted pappad & beans poriyal.',
        image: 'images/thursday_lunch.png'
      },
      {
        type: 'Dinner',
        title: 'Chicken Curry, Rice, Fried Rice',
        desc: 'Savory homestyle chicken curry, fragrant fried rice & steamed white rice with pepper rasam.',
        image: 'images/thursday_dinner.png'
      }
    ]
  },
  {
    day: 'Friday',
    meals: [
      {
        type: 'Breakfast',
        title: 'Palau',
        desc: 'Aromatic vegetable pulao cooked with whole spices, mint, vegetables & cooling cucumber raita.',
        image: 'images/friday_breakfast.png'
      },
      {
        type: 'Lunch',
        title: 'Rice, Sambar, Pappad, Vegetable',
        desc: 'Steamed rice, special Friday sambar, roasted pappad, potato fry & refreshing buttermilk.',
        image: 'images/friday_lunch.png'
      },
      {
        type: 'Dinner',
        title: 'Biryani',
        desc: 'Grand aromatic dum biryani with marinated chicken, boiled egg, mirchi ka salan & onion raita.',
        image: 'images/friday_dinner.png'
      }
    ]
  },
  {
    day: 'Saturday',
    meals: [
      {
        type: 'Breakfast',
        title: 'Upma, Kesari Bath',
        desc: 'Traditional roasted rava upma with coconut chutney paired with sweet aromatic kesari bath (Chow Chow Bath).',
        image: 'images/saturday_breakfast.png'
      },
      {
        type: 'Lunch',
        title: 'Rice, Sambar, Pappad, Vegetable',
        desc: 'Steamed rice with authentic Mangalore sambar, crispy pappad, seasonal sabzi & curd.',
        image: 'images/saturday_lunch.png'
      },
      {
        type: 'Dinner',
        title: 'Veg Rice, Sambar, Chapati',
        desc: 'Soft hot chapatis, seasoned vegetable rice, homestyle sambar & fresh dal fry.',
        image: 'images/saturday_dinner.png'
      }
    ]
  },
  {
    day: 'Sunday',
    meals: [
      {
        type: 'Breakfast',
        title: 'Mangalore Buns',
        desc: 'Authentic coastal sweet banana buns with spicy coconut chutney and piping hot filter coffee.',
        image: 'images/sunday_breakfast.png'
      },
      {
        type: 'Lunch',
        title: 'Egg Rice',
        desc: 'Flavorful spiced egg fried rice with scrambled eggs, onion, coriander & pickle.',
        image: 'images/sunday_lunch.png'
      },
      {
        type: 'Dinner',
        title: 'Chapati, Sambar, Veg',
        desc: 'Soft wheat chapatis, homestyle sambar, steamed rice and seasonal vegetable sabzi.',
        image: 'images/sunday_dinner.png'
      }
    ]
  }
];

const FOOD_MENU_DATA = {
  mon: {
    name: 'Monday',
    slots: [
      { time: 'Breakfast (7:30 - 9:30 AM)', title: 'Idli & Vada Combo', items: 'Idli, Vada, Sambar, Fresh Coconut Chutney, Tea & Filter Coffee' },
      { time: 'Lunch (12:30 - 2:30 PM)', title: 'Nutritious Rice Thali', items: 'Rice, Sambar, Pappad, Seasonal Vegetable Palya, Curd & Pickle' },
      { time: 'Snacks (5:00 - 6:00 PM)', title: 'Evening High Tea', items: 'Hot Tea / South Indian Filter Coffee & Biscuits' },
      { time: 'Dinner (7:30 - 9:30 PM)', title: 'Dinner Special', items: 'Rice, Rich Chicken Curry (or Paneer Curry for Veg), Sambar, Rasam' }
    ]
  },
  tue: {
    name: 'Tuesday',
    slots: [
      { time: 'Breakfast (7:30 - 9:30 AM)', title: 'Puri & Sagu Feast', items: 'Fluffy Golden Puri, Spiced Vegetable Sagu, Tea & Filter Coffee' },
      { time: 'Lunch (12:30 - 2:30 PM)', title: 'Dal & Rice Meal', items: 'Steamed Rice, Homestyle Dal Tadka, Vegetable Stir Fry, Curd, Papad' },
      { time: 'Snacks (5:00 - 6:00 PM)', title: 'Evening Tea', items: 'Hot Cardamom Chai & Savoury Snacks' },
      { time: 'Dinner (7:30 - 9:30 PM)', title: 'Parotta & Chicken Feast', items: 'Layered Kerala Parotta, Chicken Curry (or Veg Kurma), Steamed Rice' }
    ]
  },
  wed: {
    name: 'Wednesday',
    slots: [
      { time: 'Breakfast (7:30 - 9:30 AM)', title: 'Crispy Dosa Combo', items: 'Dosa, Sambar, Fresh Coconut Chutney, Tomato Chutney, Coffee & Tea' },
      { time: 'Lunch (12:30 - 2:30 PM)', title: 'Traditional Sambar Thali', items: 'Steamed Rice, Lentil Sambar, Roasted Pappad, Vegetable Upkari, Buttermilk' },
      { time: 'Snacks (5:00 - 6:00 PM)', title: 'Evening Snack', items: 'Hot Filter Coffee / Tea & Light Savouries' },
      { time: 'Dinner (7:30 - 9:30 PM)', title: 'Dal Kebab & Sagu Meal', items: 'Steamed Rice, Dal Kebab, Kerala Coconut Thoran, Flavorful Sagu' }
    ]
  },
  thu: {
    name: 'Thursday',
    slots: [
      { time: 'Breakfast (7:30 - 9:30 AM)', title: 'South Indian Dosa', items: 'Dosa, Sambar, Coconut Chutney, Filter Coffee & Tea' },
      { time: 'Lunch (12:30 - 2:30 PM)', title: 'Homely Lunch Thali', items: 'Steamed Rice, Drumstick Sambar, Crispy Pappad, Vegetable Poriyal, Curd' },
      { time: 'Snacks (5:00 - 6:00 PM)', title: 'Tea & Coffee', items: 'Fresh South Indian Filter Coffee & Tea' },
      { time: 'Dinner (7:30 - 9:30 PM)', title: 'Fried Rice & Chicken Curry', items: 'Chicken Curry, Steamed Rice, Spiced Fried Rice, Pepper Rasam' }
    ]
  },
  fri: {
    name: 'Friday',
    slots: [
      { time: 'Breakfast (7:30 - 9:30 AM)', title: 'Spiced Palau (Pulao)', items: 'Aromatic Vegetable Palau (Pulao) with Fresh Cucumber Raita, Tea & Coffee' },
      { time: 'Lunch (12:30 - 2:30 PM)', title: 'Friday Sambar Lunch', items: 'Steamed Rice, Special Sambar, Roasted Pappad, Vegetable Sabzi, Buttermilk' },
      { time: 'Snacks (5:00 - 6:00 PM)', title: 'Evening Refreshment', items: 'Hot Tea & Filter Coffee with Evening Bakes' },
      { time: 'Dinner (7:30 - 9:30 PM)', title: '👑 Friday Biryani Feast', items: 'Special Dum Biryani (Chicken / Veg), Mirchi Salan, Onion Raita' }
    ]
  },
  sat: {
    name: 'Saturday',
    slots: [
      { time: 'Breakfast (7:30 - 9:30 AM)', title: 'Upma & Kesari Bath', items: 'Upma, Sweet Kesari Bath (Chow Chow Bath), Coconut Chutney, Tea & Coffee' },
      { time: 'Lunch (12:30 - 2:30 PM)', title: 'Nutritious Weekend Thali', items: 'Steamed Rice, Traditional Sambar, Crispy Pappad, Vegetable Curry, Curd' },
      { time: 'Snacks (5:00 - 6:00 PM)', title: 'High Tea', items: 'Fresh Filter Coffee & Hot Tea' },
      { time: 'Dinner (7:30 - 9:30 PM)', title: 'Veg Rice & Chapati Dinner', items: 'Veg Rice, Sambar, Soft Hot Chapati, Dal Tadka' }
    ]
  },
  sun: {
    name: 'Sunday',
    slots: [
      { time: 'Breakfast (8:00 - 10:00 AM)', title: 'Mangalore Buns Special', items: 'Authentic Mangalore Banana Buns, Spicy Coconut Chutney, Filter Coffee & Tea' },
      { time: 'Lunch (12:30 - 3:00 PM)', title: 'Egg Rice Special Thali', items: 'Spiced Egg Rice, Steamed Rice, Aromatic Sambar, Vegetable Side, Curd' },
      { time: 'Snacks (5:00 - 6:00 PM)', title: 'Sunday Tea', items: 'Evening Tea, Coffee & Light Snack' },
      { time: 'Dinner (7:30 - 9:30 PM)', title: 'Comforting Sunday Dinner', items: 'Soft Chapatis, Chicken / Veg Curry, Steamed Rice, Sambar, Dessert' }
    ]
  }
};

const ROOM_DATA = {
  single: {
    title: 'Single Room (Private)',
    badge: 'Premium Private Space',
    price: 'Starting ₹8,500 / month',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&auto=format&fit=crop&q=80',
    description: 'Designed exclusively for privacy, quiet focus, and undisturbed academic/professional work.',
    amenities: [
      'Single Bed with Orthopedic Mattress',
      'Private Attached Bathroom with 24/7 Hot Water Geyser',
      'Dedicated Ergonomic Study Desk & High-Back Chair',
      'Large Personal Wardrobe with Lock & Mirror',
      'High-Speed Wi-Fi Router access inside the room',
      'Available in AC and Non-AC configurations',
      '3 Daily Home-Cooked Meals Included',
      'Daily Room Housekeeping & Trash Removal'
    ]
  },
  double: {
    title: 'Double Sharing Room',
    badge: 'Most Popular Choice',
    price: 'Starting ₹6,500 / month per person',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&auto=format&fit=crop&q=80',
    description: 'Perfect balance of camaraderie, comfort, and affordability for students and executives.',
    amenities: [
      '2 Separate Single Beds with Comfortable Mattresses',
      'Attached Spacious Bathroom with Hot Water',
      '2 Independent Study Desks & Book Storage',
      '2 Individual Steel/Wooden Wardrobes with Keys',
      'Bright Window with Blackout Curtains',
      'High-Speed Wi-Fi & Power Backup',
      '3 Nutritious Daily Meals Included',
      'Daily Housekeeping Included'
    ]
  },
  triple: {
    title: 'Triple Sharing Room',
    badge: 'Spacious & Friendly',
    price: 'Starting ₹5,200 / month per person',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80',
    description: 'Generously sized room with optimal cross-ventilation, individual storage, and vibrant vibe.',
    amenities: [
      '3 Individual Single Beds with Fresh Linen',
      'Attached Modern Washroom with Geyser',
      '3 Separate Study Workstations',
      '3 Secure Individual Wardrobes with Digital/Physical Keys',
      'Cross Ventilation & Balcony access in select rooms',
      'High-Speed Wi-Fi on all floors',
      'All 3 Daily Meals & Snacks Included',
      'Regular Housekeeping'
    ]
  },
  four: {
    title: 'Four Sharing Room',
    badge: 'Best Value / Budget Friendly',
    price: 'Starting ₹4,200 / month per person',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format&fit=crop&q=80',
    description: 'Super economical accommodation ideal for college students and interns on a tight budget.',
    amenities: [
      '4 Comfortable Single Beds with Bedspreads',
      'Spacious Attached Washroom with 24/7 Water Supply',
      '4 Individual Lockers & Wardrobes',
      'Common Study Table Setup & Wi-Fi Coverage',
      'All 3 Meals + Tea/Coffee Included in the single rent',
      '24/7 CCTV & Security Monitored Entry',
      'Washing Machine & Laundry Area Access',
      'Daily Housekeeping'
    ]
  }
};

const GALLERY_IMAGES = [
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmYHTuZZSKxGkQPkWhNaVBiWvJ6l4QXtmGpbWkKDa6082Fj1cL10n2_2BLogsrk1KsrrG01NXmsNampYR-GHvfoD9QFWM-s4m5RbdncIvxRBF3EhOUIMI3Iu_ZCWhISmNiGmiDAKg=w1200-h800-k-no', tag: 'Building Exterior', caption: 'One Stay PG building facade on Kankanady Bypass Rd, Mangaluru' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmtkDhtMkcN45jqTGx_cGSmwwYaqVSv4Si7eWrWcde1HxR0-gm_mwUYCZ8Z7RFIGSfN6D9GrPNpWWh5WTKOcgAF_xl0WSkFnxrH0obTWU-9K-1Y1a9aKK9LODCOFWh5YM9_0kHB=w1200-h800-k-no', tag: 'Washroom & Vanity', caption: 'Modern luxury washroom with LED backlit vanity mirror & ceramic basin' },
  { src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&auto=format&fit=crop&q=85', tag: 'Bedrooms', caption: 'Bright, sanitized single executive room with study desk' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=85', tag: 'Dining & Food', caption: 'Clean, air-conditioned dining area serving freshly cooked meals' },
  { src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&auto=format&fit=crop&q=85', tag: 'Bedrooms', caption: 'Double sharing room with individual wardrobes & attached bathroom' },
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&auto=format&fit=crop&q=85', tag: 'Lounge & Study', caption: 'Quiet study lounge for exam preps and peaceful reading' },
  { src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop&q=85', tag: 'Dining & Food', caption: 'Stainless steel commercial kitchen adhering to high hygiene standards' }
];

let currentLightboxIndex = 0;

// ==========================================================================
// 2. DOM INITIALIZATION & EVENT LISTENERS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initHeroImageCarousel();
  initMobileDrawer();
  initCarousels();
  initFoodWeeklyCarousel();
  initGalleryFilter();
  initFoodMenuTabs();
  initRatingSelector();
  initScrollSpy();
  initDefaultDate();
});

// Set default date for visit scheduler to tomorrow
function initDefaultDate() {
  const dateInput = document.getElementById('visitDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }
}

// ==========================================================================
// 3. STICKY HEADER & HERO 2-SECOND IMAGE CAROUSEL
// ==========================================================================

function initStickyHeader() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initHeroImageCarousel() {
  const slides = document.querySelectorAll('.hero-slide-img');
  const dots = document.querySelectorAll('#heroImgDots .hero-dot');
  const wrapper = document.getElementById('heroBuildingWrapper');
  
  if (!slides.length) return;

  let currentHeroIdx = 0;
  let heroTimer = null;
  let isHeroHovered = false;

  function showHeroSlide(index) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
    currentHeroIdx = index;
  }

  function nextHeroSlide() {
    if (isHeroHovered) return;
    const nextIdx = (currentHeroIdx + 1) % slides.length;
    showHeroSlide(nextIdx);
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    if (!isHeroHovered) {
      heroTimer = setInterval(nextHeroSlide, 2000); // exactly every 2 seconds
    }
  }

  function pauseHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = null;
  }

  // Dot click handlers
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.getAttribute('data-hero-dot'));
      showHeroSlide(targetIdx);
      startHeroTimer();
    });
  });

  // Pause on hover
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => {
      isHeroHovered = true;
      pauseHeroTimer();
    });
    wrapper.addEventListener('mouseleave', () => {
      isHeroHovered = false;
      startHeroTimer();
    });
  }

  // Start initial timer
  startHeroTimer();
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });

      bottomNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-target') === currentId) {
          item.classList.add('active');
        }
      });
    }
  });
}

// ==========================================================================
// 4. MOBILE DRAWER NAVIGATION
// ==========================================================================

function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// ==========================================================================
// 5. CAROUSEL SLIDERS (ROOMS & REVIEWS)
// ==========================================================================

function initCarousels() {
  // Rooms Carousel
  const roomTrack = document.getElementById('roomsTrack');
  const roomPrev = document.getElementById('roomPrevBtn');
  const roomNext = document.getElementById('roomNextBtn');

  if (roomTrack && roomPrev && roomNext) {
    roomNext.addEventListener('click', () => {
      roomTrack.scrollBy({ left: 300, behavior: 'smooth' });
    });
    roomPrev.addEventListener('click', () => {
      roomTrack.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }

  // Reviews Carousel
  const reviewTrack = document.getElementById('reviewsTrack');
  const reviewPrev = document.getElementById('reviewPrevBtn');
  const reviewNext = document.getElementById('reviewNextBtn');

  if (reviewTrack && reviewPrev && reviewNext) {
    reviewNext.addEventListener('click', () => {
      reviewTrack.scrollBy({ left: 380, behavior: 'smooth' });
    });
    reviewPrev.addEventListener('click', () => {
      reviewTrack.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 6. WEEKLY 7-DAY AUTOMATIC FOOD CAROUSEL (2 SECONDS PER DAY)
// ==========================================================================

let currentFoodDayIndex = 0;
let foodCarouselTimer = null;
let isFoodHovered = false;

function initFoodWeeklyCarousel() {
  const track = document.getElementById('foodCardsTrack');
  const dayBtns = document.querySelectorAll('.food-day-btn');
  const progressDots = document.querySelectorAll('#foodProgressDots .progress-dot');
  const foodSection = document.getElementById('food') || document.getElementById('foodCarouselSection');
  const showcaseBox = document.getElementById('foodCarouselSection');

  if (!track || !dayBtns.length) return;

  // 1. Pre-render all 7 days slides with 3 food cards each
  track.innerHTML = WEEKLY_CAROUSEL_DATA.map((dayData, dayIdx) => `
    <div class="food-day-slide ${dayIdx === 0 ? 'active' : ''}" data-day-index="${dayIdx}">
      ${dayData.meals.map(meal => `
        <div class="food-card" onclick="openFoodMenuModal('${dayData.day} - ${meal.title}')">
          <div class="food-card-img-wrap">
            <img src="${meal.image}" alt="${meal.title}" class="food-card-img" loading="lazy">
            <span class="food-meal-pill">${meal.type}</span>
          </div>
          <div class="food-card-body">
            <h3 class="food-card-title">${meal.title}</h3>
            <p class="food-card-desc">${meal.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  // 2. Direct day switcher function
  window.goToFoodDay = function(targetIndex) {
    if (isNaN(targetIndex) || targetIndex < 0 || targetIndex >= WEEKLY_CAROUSEL_DATA.length) return;

    const slides = track.querySelectorAll('.food-day-slide');
    
    slides.forEach((slide, idx) => {
      if (idx === targetIndex) {
        slide.classList.remove('slide-out-left');
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
        if (idx === currentFoodDayIndex) {
          slide.classList.add('slide-out-left');
        } else {
          slide.classList.remove('slide-out-left');
        }
      }
    });

    // Update Day Indicator Buttons (Monday • Tuesday • ...)
    dayBtns.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === targetIndex);
    });

    // Update Progress Dots
    progressDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === targetIndex);
    });

    currentFoodDayIndex = targetIndex;
  };

  // 3. Next day step function
  function nextFoodDay() {
    if (isFoodHovered) return;
    const nextIdx = (currentFoodDayIndex + 1) % WEEKLY_CAROUSEL_DATA.length;
    goToFoodDay(nextIdx);
  }

  // 4. Timer management (exactly 2 seconds / 2000 ms)
  function startCarouselTimer() {
    clearInterval(foodCarouselTimer);
    if (!isFoodHovered) {
      foodCarouselTimer = setInterval(nextFoodDay, 2000);
    }
  }

  function pauseCarouselTimer() {
    clearInterval(foodCarouselTimer);
    foodCarouselTimer = null;
  }

  // 5. Day indicator click handlers
  dayBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      goToFoodDay(idx);
      startCarouselTimer();
    });
  });

  // 6. Progress dots click handlers
  progressDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToFoodDay(idx);
      startCarouselTimer();
    });
  });

  // 7. Pause on hover over the entire showcase and food section
  const hoverElements = [showcaseBox, foodSection].filter(Boolean);
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      isFoodHovered = true;
      pauseCarouselTimer();
    });
    el.addEventListener('mouseleave', () => {
      isFoodHovered = false;
      startCarouselTimer();
    });
  });

  // Start initial 2-second automatic cycle
  startCarouselTimer();
}

// ==========================================================================
// 7. GALLERY CATEGORY FILTER & LIGHTBOX
// ==========================================================================

function initGalleryFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');

  const item = GALLERY_IMAGES[index];
  img.src = item.src;
  caption.innerHTML = `<strong>${item.tag}:</strong> ${item.caption}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e.target.id === 'lightboxModal') {
    closeLightboxDirect();
  }
}

function closeLightboxDirect() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = GALLERY_IMAGES.length - 1;
  } else if (currentLightboxIndex >= GALLERY_IMAGES.length) {
    currentLightboxIndex = 0;
  }
  openLightbox(currentLightboxIndex);
}

// ==========================================================================
// 7. WEEKLY FOOD MENU MODAL LOGIC
// ==========================================================================

function initFoodMenuTabs() {
  const tabs = document.querySelectorAll('.day-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const day = tab.getAttribute('data-day');
      renderDayMeals(day);
    });
  });

  // Render initial day (Monday)
  renderDayMeals('mon');
}

function renderDayMeals(dayKey) {
  const container = document.getElementById('mealScheduleContainer');
  const dayData = FOOD_MENU_DATA[dayKey];
  if (!container || !dayData) return;

  container.innerHTML = dayData.slots.map(slot => `
    <div class="meal-slot-card">
      <div class="meal-slot-time">${slot.time}</div>
      <div class="meal-slot-name">${slot.title}</div>
      <div class="meal-slot-items">${slot.items}</div>
    </div>
  `).join('');
}

function openFoodMenuModal(highlightMeal) {
  const modal = document.getElementById('foodMenuModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (highlightMeal) {
    showToast(`Showing freshly prepared menu options for ${highlightMeal}`);
  }
}

// ==========================================================================
// 8. ROOM DETAILS MODAL
// ==========================================================================

function openRoomModal(roomKey) {
  const room = ROOM_DATA[roomKey];
  if (!room) return;

  const modal = document.getElementById('roomDetailModal');
  const title = document.getElementById('roomModalTitle');
  const body = document.getElementById('roomModalBody');

  title.innerText = room.title;

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 20px;">
      <div style="border-radius: 14px; overflow: hidden; height: 230px;">
        <img src="${room.image}" alt="${room.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <span class="room-badge" style="position: static; display: inline-block; margin-bottom: 10px;">${room.badge}</span>
        <h4 style="font-size: 1.4rem; color: #18181B; margin-bottom: 6px;">${room.price}</h4>
        <p style="font-size: 0.88rem; color: #52525B; line-height: 1.5; margin-bottom: 14px;">${room.description}</p>
        <button class="btn-primary-yellow" onclick="closeModal('roomDetailModal'); openScheduleModal('${room.title}');" style="width: 100%;">
          <i class="fa-regular fa-calendar-check"></i> Book / Schedule Visit
        </button>
      </div>
    </div>
    <h5 style="font-size: 1rem; color: #18181B; margin-bottom: 12px; font-weight: 700;">Included Room Amenities:</h5>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
      ${room.amenities.map(item => `
        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.84rem; color: #374151;">
          <i class="fa-solid fa-circle-check text-yellow"></i>
          <span>${item}</span>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ==========================================================================
// 9. SCHEDULE A VISIT MODAL & FORM
// ==========================================================================

function openScheduleModal(presetRoom) {
  const modal = document.getElementById('scheduleModal');
  if (presetRoom) {
    const roomSelect = document.getElementById('visitRoomType');
    if (roomSelect) {
      for (let i = 0; i < roomSelect.options.length; i++) {
        if (roomSelect.options[i].text.includes(presetRoom)) {
          roomSelect.selectedIndex = i;
          break;
        }
      }
    }
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handleScheduleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('visitName').value;
  const phone = document.getElementById('visitPhone').value;
  const date = document.getElementById('visitDate').value;
  const time = document.getElementById('visitTime').value;
  const room = document.getElementById('visitRoomType').value;

  closeModal('scheduleModal');
  e.target.reset();

  showToast(`🎉 Thank you, ${name}! Your visit on ${date} (${time}) for ${room} has been confirmed. Our manager will call you at ${phone}.`);
}

// ==========================================================================
// 10. MAP & REVIEW MODAL
// ==========================================================================

function openMapModal() {
  const modal = document.getElementById('mapModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openReviewModal() {
  const modal = document.getElementById('reviewModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initRatingSelector() {
  const stars = document.querySelectorAll('#starSelector i');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.getAttribute('data-value'));
      stars.forEach(s => {
        const sVal = parseInt(s.getAttribute('data-value'));
        if (sVal <= val) {
          s.classList.add('selected');
        } else {
          s.classList.remove('selected');
        }
      });
    });
  });
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const author = document.getElementById('reviewAuthor').value;
  closeModal('reviewModal');
  e.target.reset();
  showToast(`⭐ Thank you, ${author}! Your resident feedback has been submitted successfully.`);
}

// ==========================================================================
// 11. GENERAL MODAL UTILITIES & TOAST ALERTS
// ==========================================================================

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal when clicking backdrop
document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Toast notification helper
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-yellow fa-lg"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
