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
    const segmentElement =getTimeSegmentElements(segmentElement);

    segmentElements.segmentOverlay
}
