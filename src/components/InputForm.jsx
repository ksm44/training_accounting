export default function InputForm({ date, setDate, distance, setDistance, trainingList, setTrainingList }) {
    const handleChangeDate = function (e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 8) {
            value = value.slice(0, 8);
        }
        
        if (value.length >= 3 && value.length <= 4) {
            value = value.slice(0, 2) + '.' + value.slice(2);
        } else if (value.length >= 5 && value.length <= 6) {
            value = value.slice(0, 2) + '.' + value.slice(2, 4) + '.' + value.slice(4);
        } else if (value.length > 6) {
            value = value.slice(0, 2) + '.' + value.slice(2, 4) + '.' + value.slice(4, 8);
        }
        
        setDate(value)
    }

    const handleChangeDistance = function (e) {
        setDistance(e.target.value);
    }
    
    const handleSubmit = function (e){
        e.preventDefault();
        
        const dataDate = date.slice(4, 8) + '-' +  date.slice(2, 4) + "-" + date.slice(0, 2);
        
        const existDateIndex = trainingList.findIndex(item => item.date === date);
        
        const trainingsSort = function(list){
            return list.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        
        if(existDateIndex !== -1){
            let newList = [...trainingList];
            
            newList[existDateIndex] = {
                ...newList[existDateIndex],
                distance: newList[existDateIndex].distance + parseFloat(distance)
            };
            
            newList = trainingsSort(newList)
            
            setTrainingList(newList);
        } else {
            const training = {
                date: date,
                dataDate: dataDate,
                distance:  parseFloat(distance) 
            }
            
            setTrainingList(trainingsSort([...trainingList, training]));
        }
        
        setDate('');
        setDistance('')
    }

    return (
        <div className="form-container">
            <form id="trainingForm" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                        <input type="text" id="date" name="date" placeholder="20.07.2019" value={date} onChange={handleChangeDate} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="distance">Пройдено км</label>
                        <input type="number" id="distance" name="distance" placeholder="5.7" step="0.1" min="0" value={distance} onChange={handleChangeDistance} required />
                    </div>

                    <button type="submit" className="submit-btn">OK</button>
                </div>
            </form>
        </div>
    )
}