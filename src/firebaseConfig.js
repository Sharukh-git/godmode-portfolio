import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, updateDoc, increment, getDoc } from "firebase/firestore";

// ✅ Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByOPjMQfeMHSKA7AOB4ciO2h4wQfEr3MY",
  authDomain: "portfolio-tracker-81bf2.firebaseapp.com",
  projectId: "portfolio-tracker-81bf2",
  storageBucket: "portfolio-tracker-81bf2.appspot.com",
  appId: "1:86987060284:web:1452dffc263311b742ff39",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Function to track total and unique visitors
const trackVisitor = async () => {
  const visitsRef = doc(db, "analytics", "visitorCount");
  const uniqueRef = doc(db, "analytics", "uniqueVisitors");

  try {
    console.log("👀 Checking Firestore visitor count...");

    // Ensure documents exist before updating
    const visitSnap = await getDoc(visitsRef);
    if (!visitSnap.exists()) await setDoc(visitsRef, { count: 0 });

    const uniqueSnap = await getDoc(uniqueRef);
    if (!uniqueSnap.exists()) await setDoc(uniqueRef, { count: 0 });

    // ✅ Increment total visitor count
    await updateDoc(visitsRef, { count: increment(1) });
    console.log("✅ Total visitor count updated!");

    // 🔹 Track unique visitors (daily)
    const lastVisit = localStorage.getItem("lastVisitDate");
    const today = new Date().toISOString().split("T")[0];

    if (lastVisit !== today) {
      console.log("🆕 Unique visitor detected, updating Firestore...");
      await updateDoc(uniqueRef, { count: increment(1) });
      localStorage.setItem("lastVisitDate", today);
    } else {
      console.log("🔄 Returning visitor, not counted as unique today.");
    }
  } catch (error) {
    console.error("❌ Error updating visitor count:", error);
  }
};

// ✅ Export Firebase and tracking function
export { app, db, trackVisitor };
