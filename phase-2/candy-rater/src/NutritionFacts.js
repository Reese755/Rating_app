import React from 'react';
import candy from './Candy'

function NutritionFacts ({name, image, nutrition_facts}) {




return (
<div>
<h2> Nutrition Facts</h2>
<p>  Serving Size: {nutrition_facts.serving_size} </p>

</div>
    )
}
export default NutritionFacts;