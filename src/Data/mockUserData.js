export const mockUserData = {
    profile: {
      name: "Jit Bahadhur Gurung",
      email: "jitBahadhur@gmail.com",
      phone: "+977 98273376389",
    },
    addresses: [
      {
        type: "Default Shipping Address",
        recipient: "Jit Bahadur Gurung",
        location: "Sanepa, Lalitpur",
        details: "Bagmati Provience-Lalitpur Metro 15 - Godawari - Santaneshwor",
        contact: "(+977) 9843628711"
      }
    ],
    orders: {
      recent: [
        {
          id: "ORDER-2024-1278217921",
          date: "Jan 15 2025",
          items: [{ name: "Lay's", quantity: 1 }],
          status: "Delivered",
          deliveryDate: "May 25 2025"
        }
      ],
      cancelled: [
        {
          id: "ORDER-2024-1278217921",
          date: "Jan 15 2025",
          reportAvailable: true
        }
      ]
    }
  };