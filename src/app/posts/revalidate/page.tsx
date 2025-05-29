"use client";

export default function RevalidateButton() {
  const handleRevalidate = async () => {
    await fetch("/api/revalidate", {
      method: "POST",
      body: JSON.stringify({ path: "/" }), // Or any path you want to revalidate
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Page revalidated!");
  };

  return <button onClick={handleRevalidate}>Manually Revalidate</button>;
}
