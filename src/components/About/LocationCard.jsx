import "./locationCard.css";
export default function LocationCard() {
    return (
        <div className="location-card">
            <div className="location-header">
                📍 India <br />
                (UTC +05:30)
            </div>

            <div className="globe">
                <div className="dot"></div>
            </div>
        </div>
    );
}