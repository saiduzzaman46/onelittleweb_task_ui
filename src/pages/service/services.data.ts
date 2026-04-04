import { IService } from "@/interfaces/common/service.interface";

export const servicesData: IService[] = [
  {
    id: 1,
    title: "Manage Property\nListings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/icons/property_list.svg",
    isActive: true, // First card is active style
  },
  {
    id: 2,
    title: "Manage Customer\nBookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/icons/coustomer_book.svg",
  },
  {
    id: 3,
    title: "Schedule House\nCleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/icons/house_cleaning.svg",
  },
  {
    id: 4,
    title: "Monitor Guest\nReviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/icons/guest_review.svg",
  },
  {
    id: 5,
    title: "Track & Report\nExpenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/icons/report_expenses.svg",
  },
  {
    id: 6,
    title: "Guest Inquiry\n& Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/icons/inquiry_support.svg",
  },
];
