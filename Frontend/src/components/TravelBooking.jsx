import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Building2,
  Calendar,
  Users,
  Tag,
  Search,
  MapPin,
  BedDouble,
  X,
  User,
  Mail,
  Phone,
  MessageSquare,
  Banknote,
} from "lucide-react";

import LatestOffers from "./LatestOffers";

const TravelBooking = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("oneway");
  const [modalType, setModalType] = useState(null);

  const [flightFrom, setFlightFrom] = useState("New Delhi");
  const [flightTo, setFlightTo] = useState("Toronto");
  const [departDate, setDepartDate] = useState("2026-02-21");
  const [returnDate, setReturnDate] = useState("");
  const [flightTravellers, setFlightTravellers] = useState("1 Traveller");

  const [hotelLocation, setHotelLocation] = useState("Toronto, Canada");
  const [checkIn, setCheckIn] = useState("2026-02-21");
  const [checkOut, setCheckOut] = useState("2026-02-25");
  const [hotelGuests, setHotelGuests] = useState("1 Room, 2 Adults");

  const renderModal = () => {
    if (!modalType) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setModalType(null)}
        />

        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          // Added max-h-[90vh] and overflow-y-auto so the modal scrolls safely on very small phones
          className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#0f0f0f] rounded-2xl border border-gray-800 shadow-2xl flex flex-col no-scrollbar"
        >
          <div className="bg-[#050505] p-6 border-b border-gray-800 flex justify-between items-start sticky top-0 z-10">
            <div>
              <h2 className="text-xl font-black text-white tracking-tight uppercase">
                Verified Quote
              </h2>
              <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-1">
                Enter Contact Info For Final Fares
              </p>
            </div>
            <button
              onClick={() => setModalType(null)}
              className="p-1 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-4">
            {modalType === "flight" ? (
              <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-3.5 rounded-xl border border-gray-800 focus-within:border-orange-500 transition-colors group">
                <Plane
                  size={18}
                  className="text-gray-500 group-focus-within:text-orange-500 transition-colors"
                />
                <select className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white focus:ring-0 appearance-none cursor-pointer">
                  <option className="bg-[#111] text-white">
                    Select Flight Type
                  </option>
                  <option className="bg-[#111] text-white">Economy</option>
                  <option className="bg-[#111] text-white">
                    Premium Economy
                  </option>
                  <option className="bg-[#111] text-white">
                    Business Class
                  </option>
                  <option className="bg-[#111] text-white">First Class</option>
                </select>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-3.5 rounded-xl border border-gray-800 focus-within:border-orange-500 transition-colors group">
                <Building2
                  size={18}
                  className="text-gray-500 group-focus-within:text-orange-500 transition-colors"
                />
                <select className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white focus:ring-0 appearance-none cursor-pointer">
                  <option className="bg-[#111] text-white">
                    Select Room Type
                  </option>
                  <option className="bg-[#111] text-white">
                    Standard Room
                  </option>
                  <option className="bg-[#111] text-white">Deluxe Room</option>
                  <option className="bg-[#111] text-white">Suite</option>
                </select>
              </div>
            )}

            {modalType === "hotel" && (
              <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-3.5 rounded-xl border border-gray-800 focus-within:border-orange-500 transition-colors group">
                <Banknote
                  size={18}
                  className="text-gray-500 group-focus-within:text-orange-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Budget"
                  className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white focus:ring-0 placeholder-gray-600"
                />
              </div>
            )}

            <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-3.5 rounded-xl border border-gray-800 focus-within:border-orange-500 transition-colors group">
              <User
                size={18}
                className="text-gray-500 group-focus-within:text-orange-500 transition-colors"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white focus:ring-0 placeholder-gray-600"
              />
            </div>

            <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-3.5 rounded-xl border border-gray-800 focus-within:border-orange-500 transition-colors group">
              <Mail
                size={18}
                className="text-gray-500 group-focus-within:text-orange-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white focus:ring-0 placeholder-gray-600"
              />
            </div>

            <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-3.5 rounded-xl border border-gray-800 focus-within:border-orange-500 transition-colors group">
              <Phone
                size={18}
                className="text-gray-500 group-focus-within:text-orange-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white focus:ring-0 placeholder-gray-600"
              />
            </div>

            <div className="flex items-start gap-3 bg-[#1a1a1a] px-4 py-3.5 rounded-xl border border-gray-800 focus-within:border-orange-500 transition-colors group">
              <MessageSquare
                size={18}
                className="text-gray-500 group-focus-within:text-orange-500 transition-colors mt-0.5"
              />
              <textarea
                placeholder="Your Query"
                rows="3"
                className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white focus:ring-0 placeholder-gray-600 resize-none"
              ></textarea>
            </div>

            <button className="w-full mt-2 bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95">
              Get Quotation in 24 Hrs
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans relative overflow-x-hidden no-scrollbar">
      <AnimatePresence>{renderModal()}</AnimatePresence>

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col justify-center py-12 md:py-20">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-3"
          >
            Global Travel
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight"
          >
            Book Your Journey
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full bg-[#111] rounded-2xl sm:rounded-3xl border border-gray-800 shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="flex border-b border-gray-800 bg-[#0f0f0f]">
            <button
              onClick={() => setActiveTab("flights")}
              className={`flex items-center justify-center gap-2 w-1/2 sm:w-auto px-6 sm:px-8 py-5 sm:py-6 font-bold tracking-widest text-xs sm:text-sm uppercase transition-all relative ${activeTab === "flights" ? "text-orange-500" : "text-gray-500 hover:text-gray-300"}`}
            >
              <Plane
                size={18}
                className={activeTab === "flights" ? "fill-current" : ""}
              />{" "}
              Flights
              {activeTab === "flights" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("hotels")}
              className={`flex items-center justify-center gap-2 w-1/2 sm:w-auto px-6 sm:px-8 py-5 sm:py-6 font-bold tracking-widest text-xs sm:text-sm uppercase transition-all relative ${activeTab === "hotels" ? "text-orange-500" : "text-gray-500 hover:text-gray-300"}`}
            >
              <Building2
                size={18}
                className={activeTab === "hotels" ? "fill-current" : ""}
              />{" "}
              Hotels
              {activeTab === "hotels" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                />
              )}
            </button>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === "flights" && (
                <motion.div
                  key="flights"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  // FIX: Removed absolute inset-0 and h-full so the form pushes the bottom action bar down natively!
                  className="flex flex-col w-full"
                >
                  <div className="flex gap-6 sm:gap-8 p-6 sm:p-8 items-center border-b md:border-b-0 border-gray-800">
                    <label
                      onClick={() => setTripType("oneway")}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${tripType === "oneway" ? "border-orange-500" : "border-gray-600 group-hover:border-orange-500/50"}`}
                      >
                        {tripType === "oneway" && (
                          <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
                        )}
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${tripType === "oneway" ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                      >
                        One Way
                      </span>
                    </label>
                    <label
                      onClick={() => setTripType("roundtrip")}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${tripType === "roundtrip" ? "border-orange-500" : "border-gray-600 group-hover:border-orange-500/50"}`}
                      >
                        {tripType === "roundtrip" && (
                          <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
                        )}
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${tripType === "roundtrip" ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                      >
                        Round Trip
                      </span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 border-y border-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-800 flex-1">
                    <div className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-center group focus-within:bg-white/[0.04]">
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-text">
                        From
                      </label>
                      <input
                        type="text"
                        value={flightFrom}
                        onChange={(e) => setFlightFrom(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0"
                      />
                      <MapPin
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-700 pointer-events-none hidden lg:block group-focus-within:text-orange-500/50 transition-colors"
                      />
                    </div>

                    <div className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-center group focus-within:bg-white/[0.04]">
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-text">
                        To
                      </label>
                      <input
                        type="text"
                        value={flightTo}
                        onChange={(e) => setFlightTo(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0"
                      />
                      <MapPin
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-700 pointer-events-none hidden lg:block group-focus-within:text-orange-500/50 transition-colors"
                      />
                    </div>

                    <div className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-center group focus-within:bg-white/[0.04]">
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-pointer">
                        Departure
                      </label>
                      <input
                        type="date"
                        value={departDate}
                        onChange={(e) => setDepartDate(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0 cursor-pointer [color-scheme:dark]"
                      />
                      <Calendar
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-600 pointer-events-none hidden md:block group-focus-within:text-orange-500 transition-colors"
                      />
                    </div>

                    <div
                      className={`p-4 sm:p-6 transition-colors relative flex flex-col justify-center group ${tripType === "oneway" ? "opacity-40 bg-[#0a0a0a]" : "hover:bg-white/[0.02] focus-within:bg-white/[0.04]"}`}
                    >
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-pointer">
                        Return
                      </label>
                      <input
                        type="date"
                        disabled={tripType === "oneway"}
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0 cursor-pointer [color-scheme:dark]"
                      />
                      <Calendar
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-600 pointer-events-none hidden md:block group-focus-within:text-orange-500 transition-colors"
                      />
                    </div>

                    <div className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-center group focus-within:bg-white/[0.04]">
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-pointer">
                        Travellers
                      </label>
                      <select
                        value={flightTravellers}
                        onChange={(e) => setFlightTravellers(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0 cursor-pointer appearance-none"
                      >
                        <option
                          value="1 Traveller"
                          className="bg-[#111] text-white"
                        >
                          1 Traveller
                        </option>
                        <option
                          value="2 Travellers"
                          className="bg-[#111] text-white"
                        >
                          2 Travellers
                        </option>
                        <option
                          value="3+ Travellers"
                          className="bg-[#111] text-white"
                        >
                          3+ Travellers
                        </option>
                      </select>
                      <Users
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-600 pointer-events-none hidden md:block group-focus-within:text-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center p-6 sm:p-8 gap-6 bg-[#0d0d0d]">
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase text-center md:text-left">
                      <Tag size={16} className="text-orange-500" /> Special net
                      fares available for selection
                    </div>
                    <button
                      onClick={() => setModalType("flight")}
                      className="w-full md:w-auto bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95"
                    >
                      <Search size={18} /> Search Flights
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === "hotels" && (
                <motion.div
                  key="hotels"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  // FIX: Removed absolute inset-0 and h-full here too!
                  className="flex flex-col w-full"
                >
                  <div className="h-auto md:h-[88px] flex items-center p-6 sm:px-8 border-b border-gray-800">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <BedDouble size={16} className="text-orange-500" /> Find
                      the perfect stay
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 border-b border-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-800 flex-1">
                    <div className="md:col-span-2 p-4 sm:p-6 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-center group focus-within:bg-white/[0.04]">
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-text">
                        City, Property Name Or Location
                      </label>
                      <input
                        type="text"
                        value={hotelLocation}
                        onChange={(e) => setHotelLocation(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0"
                      />
                      <MapPin
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-700 pointer-events-none hidden lg:block group-focus-within:text-orange-500/50 transition-colors"
                      />
                    </div>

                    <div className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-center group focus-within:bg-white/[0.04]">
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-pointer">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0 cursor-pointer [color-scheme:dark]"
                      />
                      <Calendar
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-600 pointer-events-none hidden md:block group-focus-within:text-orange-500 transition-colors"
                      />
                    </div>

                    <div className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-center group focus-within:bg-white/[0.04]">
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-pointer">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0 cursor-pointer [color-scheme:dark]"
                      />
                      <Calendar
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-600 pointer-events-none hidden md:block group-focus-within:text-orange-500 transition-colors"
                      />
                    </div>

                    <div className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors relative flex flex-col justify-center group focus-within:bg-white/[0.04]">
                      <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors cursor-pointer">
                        Rooms & Guests
                      </label>
                      <select
                        value={hotelGuests}
                        onChange={(e) => setHotelGuests(e.target.value)}
                        className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 bg-transparent border-none outline-none w-full p-0 focus:ring-0 cursor-pointer appearance-none"
                      >
                        <option
                          value="1 Room, 2 Adults"
                          className="bg-[#111] text-white"
                        >
                          1 Room, 2 Adults
                        </option>
                        <option
                          value="2 Rooms, 4 Adults"
                          className="bg-[#111] text-white"
                        >
                          2 Rooms, 4 Adults
                        </option>
                        <option
                          value="Group Booking"
                          className="bg-[#111] text-white"
                        >
                          Group Booking
                        </option>
                      </select>
                      <Users
                        size={20}
                        className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-600 pointer-events-none hidden md:block group-focus-within:text-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center p-6 sm:p-8 gap-6 bg-[#0d0d0d]">
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase text-center md:text-left">
                      <Tag size={16} className="text-orange-500" /> Exclusive
                      hotel deals & international upgrades available
                    </div>
                    <button
                      onClick={() => setModalType("hotel")}
                      className="w-full md:w-auto bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95"
                    >
                      <Search size={18} /> Search Hotels
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <LatestOffers onOpenModal={setModalType} />
    </section>
  );
};

export default TravelBooking;
