const targetDate = '2024-12-12T19:00:00';

function getTimeSegmentElements(segmentElement) {
    const segmentDisplay = segmentElement.querySelector(
        '.segment-display'
    );
    const segmentDisplayTop = segmentDisplay.querySelector(
        '.segment-display_top'
    );
    const segmentDisplayBottom =segmentDisplay.querySelector(
        '.segment-display_bottom'
    );
    const segmentOverlay = segmentDisplay.querySelector(
        '.segment-overlay'
    );
    const segmentOverlayTop = segmentOverlay.querySelector(
        '.segment-overlay_top'
    );
    const segmentOverlayBottom = segmentOverlay.querySelector(
        '.segment-overlay_bottom'
    );

    return{
        segmentDisplayTop,
        segmentDisplayBottom,
        segmentOverlay,
        segmentOverlayTop,
        segmentOverlayBottom
    }
}

function updateSegmentValues(displayElement, overlayElement, value){
    displayElement.textContent = value;
    overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
    const segmentElements =getTimeSegmentElements(segmentElement);

    segmentElements.segmentOverlay.classList.add('flip');

    updateSegmentValues(
        segmentElements.segmentDisplayTop,
        segmentElements.segmentOverlayBottom,
        timeValue
    );

    function finishAnimation() {
        segmentElements.segmentOverlay.classList.remove('flip');
        updateSegmentValues(
            segmentElements.segmentDisplayBottom,
            segmentElements.segmentOverlayTop,
            timeValue
        );

        this.removeEventListner('animationend', finishAnimation);
    }
    segmentElements.segmentOverlay.addEventListner('animationend', finishAnimation)
}

function updateTimeSection(sectionID, timevalue) { //14
    const firstNumber = Math.floor(timeValue / 10); //1
    const secondNumber = timeValue % 10;//4

    const sectionElement = document.getElementById(sectionID);
    const timeSegments =
     sectionElement.querySelectorAll('.time-segment');
    
    updateTimeSegment(timeSegment[0], firstNumber);
    updateTimeSegment(timeSegment[1], secondNumber);
}