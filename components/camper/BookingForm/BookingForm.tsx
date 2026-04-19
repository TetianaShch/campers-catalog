'use client';

export default function BookingForm() {
  return (
    <div>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>

      <form>
        <input type="text" name="name" placeholder="Name*" />
        <input type="email" name="email" placeholder="Email*" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
