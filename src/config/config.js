const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Wedding of Nikhil & Aishwarya",
    // Opening message/description of the invitation
    description:
      "We are getting married and invite you to join us in celebrating this special moment.",
    // Groom's name
    groomName: "Nikhil",
    // Bride's name
    brideName: "Aishwarya",
    // Groom's parents names
    parentGroom: "Mr. VenuMadhav & (Late)Sujatha",
    // Bride's parents names
    parentBride: "Mr. Srinivas & Mrs. Padma Priya",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-11-07",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.google.com/maps?cid=4030824928288237815",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d106.8270733147699!3d-6.175392995514422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f1b6d7b1e7%3A0x2e69f4f1b6d7b1e7!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1633666820004!5m2!1sid!2sid",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "10:30 AM IST",
    // Venue/building name
    location: "Padmanayaka Convention",
    // Full address of the wedding venue
    address: "Near GeethaBhavan, Karimnagar, Telangana, 505001",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Marriage Ceremony",
        // Event date (format: YYYY-MM-DD)
        date: "2025-11-07",
        // Start time (format: HH:MM)
        startTime: "10:30",
        // End time (format: HH:MM)
        endTime: "12:30",
        // Event venue
        location: "Padmanayaka Convention",
        // Full address
        address: "Near GeethaBhavan, Karimnagar, Telangana, 505001",
        maps_url: "https://maps.google.com/maps?cid=4030824928288237815",
      },
      {
        // Second event name
        title: "Haldi & Sangeet",
        date: "2025-11-01",
        startTime: "12:00",
        endTime: "22:30",
        location: "Farm Atharv",
        address: "Kamanpoor, Karimnagar, Telangana, 505001",
        maps_url: "https://maps.google.com/maps?cid=13853673914675021789",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "HDFC Bank",
        // Account number
        accountNumber: "xD",
        // Account holder name (all uppercase)
        accountName: "No Name",
      },
      {
        bank: "Bank Anonymous",
        accountNumber: "xD",
        accountName: "No Name",
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;