function closestNumber(numbers, search) {
        
        var closest = numbers[0];
        var difference = Math.abs(search - closest);
        for (var i = 0; i < numbers.length; i++) {
            var newDifference = Math.abs(search - numbers[i]);
            if (newDifference < difference) {
                difference = newDifference;
                closest = numbers[i];
            }
        }
        return closest;
    }
