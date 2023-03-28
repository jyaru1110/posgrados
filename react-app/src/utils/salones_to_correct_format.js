export function salones_to_correct_format (clases)
{
    if(clases !== undefined)
    {
        var i = 1;
        clases.forEach(clase => {
                clase._id = i;
                clase.name = clase.salon;
                i++;
            }
        );
        return clases;
    }

}