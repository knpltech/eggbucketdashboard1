import React, { useState } from "react";
import logo from "../assets/Logo.png";
import Users from "./Users"; // your add/edit/delete user page

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-[#F5EBD9]">

      {/* --------------------------------------- */}
      {/* SIDEBAR */}
      {/* --------------------------------------- */}
      <div className="w-64 bg-[#F4D7B8] p-6 flex flex-col shadow-xl">

        <div className="flex items-center gap-3 mb-8">
          <img src={logo} className="w-10" />
          <h1 className="text-xl font-bold text-gray-800">Egg Bucket</h1>
        </div>

        <div className="space-y-3 text-gray-700 font-medium">

          <SidebarItem
            name="Dashboard"
            active={activePage === "Dashboard"}
            onClick={() => setActivePage("Dashboard")}
          />

          <SidebarItem name="Daily Damages" />
          <SidebarItem name="NECC Rate" />
          <SidebarItem name="Daily Sales" />
          <SidebarItem name="Digital Payments" />
          <SidebarItem name="Cash Payments" />
          <SidebarItem name="Distribution" />
          <SidebarItem name="Outlets" />
          <SidebarItem name="Reports" />

          {/* USERS PAGE */}
          <SidebarItem
            name="Users"
            active={activePage === "Users"}
            onClick={() => setActivePage("Users")}
          />

        </div>
      </div>

      {/* --------------------------------------- */}
      {/* MAIN CONTENT AREA */}
      {/* --------------------------------------- */}
      <div className="flex-1 p-6 overflow-auto">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold">
            {activePage === "Dashboard" ? "Admin Dashboard" : activePage}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">🔔</span>
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </div>

        {/* SWITCH BETWEEN PAGES */}
        {activePage === "Dashboard" ? (
          <DashboardHome />
        ) : activePage === "Users" ? (
          <Users />
        ) : (
          <Placeholder name={activePage} />
        )}

      </div>
    </div>
  );
}

/* --------------------------------------------- */
/* COMPONENTS */
/* --------------------------------------------- */

function SidebarItem({ name, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 rounded-lg ${
        active ? "bg-white shadow font-semibold" : "hover:bg-white/60"
      }`}
    >
      {name}
    </div>
  );
}

/* ---------------- Dashboard Home Content ---------------- */
function DashboardHome() {
  return (
    <>
      {/* HERO BANNER */}
      <div className="w-full h-60 bg-yellow-200 rounded-xl mb-8 shadow-md flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800">About Egg Bucket</h2>
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-4 gap-4 mb-10">

        <StatCard title="Total Eggs Distributed Today" value="12,540" icon="🥚" />

        <StatCard title="Total Outlets" value="452" icon="🏪" />

        <StatCard title="Damages This Week" value="85" icon="📉" />

        <StatCard title="Today's NECC Rate" value="₹ 5.20/egg" icon="📈" />

      </div>

      {/* MILESTONES */}
      <h2 className="text-xl font-bold mb-4">Achievements & Milestones</h2>

      <div className="grid grid-cols-3 gap-4">
        <MilestoneCard date="Q1 2024" title="Expanded to 5 New Regions" icon="➡️" />
        <MilestoneCard date="Oct 2023" title="1 Million Eggs Distributed Monthly" icon="🏆" />
        <MilestoneCard date="Aug 2023" title="Launched Digital Payment System" icon="💳" />
      </div>

      {/* FOOTER */}
      <footer className="mt-10 text-gray-700 text-sm flex justify-between">
        <p>Contact Us: support@eggbucket.com | +91 123 456 7890</p>
        <p>Address: 123 Egg Lane, Poultry Park, New Delhi</p>
      </footer>
    </>
  );
}

/* ---------------- Placeholder for other pages ---------------- */
function Placeholder({ name }) {
  return (
    <div className="w-full h-60 bg-white/60 rounded-xl shadow flex items-center justify-center text-xl text-gray-600">
      {name} page coming soon...
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col">
      <p className="text-gray-600">{title}</p>
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-3xl font-bold text-orange-600">{value}</h3>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  );
}

function MilestoneCard({ date, title, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3">
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
}
