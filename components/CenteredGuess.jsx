export default function() {
    return ( <div class="centeredGuess">
        <input type="text" name="price" id="guessButton" />
        <button type="submit" onClick={() => determineCorrect(guessButton.value)}>Guess!</button>
    </div>
    );
}