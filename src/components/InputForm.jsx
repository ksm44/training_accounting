export default function InputForm({ date, distance, onSubmit, onChangeDate, onChangeDistance }) {

    return (
        <div className="form-container">
            <form id="trainingForm" onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                        <input type="date" id="date" name="date" placeholder="20.07.2019" value={date} onChange={onChangeDate} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="distance">Пройдено км</label>
                        <input type="number" id="distance" name="distance" placeholder="5.7" step="0.1" min="0" value={distance} onChange={onChangeDistance} required />
                    </div>

                    <button type="submit" className="submit-btn">OK</button>
                </div>
            </form>
        </div>
    )
}