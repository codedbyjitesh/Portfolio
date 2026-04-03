import "./locationCard.css";
export default function LocationCard() {
    return (
        <div className="location-card">
            <div className="location-header">
                📍 Algeria <br />
                (UTC +01:00)
            </div>

            <div className="globe">
                <div className="dot"></div>
            </div>
        </div>
    );
}