export default function ViewData({ trainingList, dateFormated, onEdit, onDelete }) {
    
    return (
        <div className="data-table">
            <div className="table-header">
                <div className="col-date">Дата (ДД.ММ.ГГ)</div>
                <div className="col-distance">Пройдено км</div>
                <div className="col-actions">Действия</div>
            </div>

            <div className="table-body" id="tableBody">
                { trainingList.length === 0 ? (
                    <div className="empty-state">Нет данных о тренировках</div>
                ) : (
                        trainingList.map(training => (
                            <div className="table-row" data-date={training.date}  key={training.date}>
                                <div className="col-date">{dateFormated(training.date)}</div>
                                <div className="col-distance">{training.distance}</div>
                                <div className="col-actions">
                                    <button className="action-btn edit-btn" title="Редактировать" onClick={() => onEdit(training)}>✎</button>
                                    <button className="action-btn delete-btn" title="Удалить" onClick={() => onDelete(training.date)}>✕</button>
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    )
}