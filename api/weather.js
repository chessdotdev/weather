export default async function handle(req, res){
    const { city } = req.query;

    if(!city){
        return res.status(400).json({error: "City name is required"});
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
        if(!response.ok){
            throw new Error('Network response not work');
        }
        const data = await response.json();
        res.status(200).json({data: success});
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }


}