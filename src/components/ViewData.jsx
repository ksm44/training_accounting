export default function ViewData({ trainingList, setTrainingList, setDate, setDistance }) {
    const handleDelete = (dateToDelete) => {
        const newList = trainingList.filter(training => training.date !== dateToDelete);
        setTrainingList(newList);
    }
    
    const handleEdit = (editTraining) => {
        setDate(editTraining.date);
        setDistance(editTraining.distance)
        handleDelete(editTraining.date);
    }
    
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
                            <div className="table-row" data-date={training.dataDate}  key={training.dataDate}>
                                <div className="col-date">{training.date}</div>
                                <div className="col-distance">{training.distance}</div>
                                <div className="col-actions">
                                    <button className="action-btn edit-btn" title="Редактировать" onClick={() => handleEdit(training)}>✎</button>
                                    <button className="action-btn delete-btn" title="Удалить" onClick={() => handleDelete(training.date)}>✕</button>
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    )
}