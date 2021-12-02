module.exports = function WildLife(pool){

    let messageLevel = '';

    async function updateChallenges(name, percent){
        var checkData = await pool.query('SELECT name FROM challenge');
        var insertData = await pool.query('INSERT INTO challenge (name_id, percentage) VALUES ($1, $2)');
        if (checkData.rowCount === 1){
            await pool.query('UPDATE challenge SET percentage = percentage+33.33 WHERE name_id = $1', [name, percent])
        }

        if (percent === 33.33){
            messageLevel = "Level1";
        }
        else if(percent === 66){
            messageLevel = "Level2";
        }
        else if (percent === 99){
            messageLevel = "Level3"
        }
    }


    async function level(){
        return messageLevel;
    }

    return{
        updateChallenges,
        level
    }


}