export default async function handle(req, res){
    const { city } = req.query;

    if(!city){
        return res.status(400).json({error: "City name is required"});
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
        if(!response.ok){
            const errorText = await response.text();     
            console.error(`OpenWeather API error: ${response.status}`);
            return res.status(response.status).json();       
        }
        const data = await response.json();
        res.status(200).json(data);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }


}