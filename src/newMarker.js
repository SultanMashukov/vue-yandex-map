// eslint-disable-next-line import/no-extraneous-dependencies
import * as utils from './utils';

const MARKER_TYPES = [
    'placemark',
    'polyline',
    'rectangle',
    'polygon',
    'circle',
];

const defaultMarkerEvents = [
    'balloonclose',
    'balloonopen',
    'click',
    'contextmenu',
    'dblclick',
    'drag',
    'dragend',
    'dragstart',
    'hintclose',
    'hintopen',
    'mouseenter',
    'mouseleave',
];
//inject: ['useObjectManager', 'addMarker', 'deleteMarker', 'compareValues', 'makeComponentBalloonTemplate'],
export class MarkerHandler{
    constructor(marker,mapComponentContext){
        
        this.marker = marker;
        this.mapComponentContext = mapComponentContext;
        
        //имитация props
        this.markerId = marker.id,
        this.coords = [marker.lat, marker.lon];
        this.icon = {content: '666'};
        this.options = {preset: 'islands#redStretchyIcon'};
        this.balloon = {header: marker.name, body: '<div>Я ТЕЛО</>'};
        this.clusterName = 'drugstores';
        this.markerType = 'placemark';
        this.markerFill = null;
        this.markerStroke = null;
        this.circleRadius = 1000;
        this.balloonTemplate = null;
        this.properties = null;
        this.balloonComponentProps = {};
        this.markerEvents = []
    }

    addPreparedMarker(){
        const _this = this;
        _this.mapComponentContext.addMarker(_this.defineMarker());
    }

    defineMarker() {
        debugger
        const _this = this;
        const marker = {
            markerId: _this.markerId,
            markerType: _this.markerType || 'placemark',
            coords: utils.setCoordsToNumeric(_this.coords),
            hintContent: _this.hintContent,
            markerFill: _this.markerFill,
            circleRadius: +_this.circleRadius,
            clusterName: _this.clusterName,
            markerStroke: _this.markerStroke,
            balloon: _this.balloon,
            properties: _this.properties,
            options: _this.options,
            balloonOptions: {},
        };

        let balloonContentLayout = null;
        let balloonLayout = null;

        
        balloonContentLayout = ymaps.templateLayoutFactory.createClass(_this.marker.balloonHtmlContent);


        if (balloonContentLayout != null) {
            marker.balloonOptions.balloonContentLayout = balloonContentLayout;
        }

        

        if (this.icon && ['default#image', 'default#imageWithContent'].includes(this.icon.layout)) {
            marker.iconContent = this.icon.content;
            marker.iconLayout = this.icon.layout;
            marker.iconImageHref = this.icon.imageHref;
            marker.iconImageSize = this.icon.imageSize;
            marker.iconImageOffset = this.icon.imageOffset;
            marker.iconContentOffset = this.icon.contentOffset;
            if (this.icon.contentLayout && typeof this.icon.contentLayout === 'string') {
                marker.iconContentLayout = ymaps.templateLayoutFactory
                    .createClass(this.icon.contentLayout);
            }
        } else {
            marker.icon = this.icon;
        }

        const markerType = utils.createMarkerType(marker.markerType, _this.mapComponentContext.useObjectManager);
        const initialProps = {
            hintContent: marker.hintContent,
            iconContent: marker.icon ? marker.icon.content : marker.iconContent,
            markerId: marker.markerId,
        };

        const balloonProps = marker.balloon ? {
            balloonContentHeader: marker.balloon.header,
            balloonContentBody: marker.balloon.body,
            balloonContentFooter: marker.balloon.footer,
        } : {};

        const properties = Object.assign(initialProps, balloonProps, marker.properties);

        const iconOptions = marker.iconLayout ? {
            iconLayout: marker.iconLayout,
            iconImageHref: marker.iconImageHref,
            iconImageSize: marker.iconImageSize,
            iconImageOffset: marker.iconImageOffset,
            iconContentOffset: marker.iconContentOffset,
            iconContentLayout: marker.iconContentLayout,
        } : { preset: marker.icon && `islands#${utils.getIconPreset(marker)}Icon` };

        const strokeOptions = marker.markerStroke ? {
            strokeColor: marker.markerStroke.color || '0066ffff',
            strokeOpacity: parseFloat(marker.markerStroke.opacity) >= 0
                ? parseFloat(marker.markerStroke.opacity) : 1,
            strokeStyle: marker.markerStroke.style,
            strokeWidth: parseFloat(marker.markerStroke.width) >= 0
                ? parseFloat(marker.markerStroke.width) : 1,
        } : {};

        const fillOptions = marker.markerFill ? {
            fill: marker.markerFill.enabled || true,
            fillColor: marker.markerFill.color || '0066ff99',
            fillOpacity: parseFloat(marker.markerFill.opacity) >= 0
                ? parseFloat(marker.markerFill.opacity) : 1,
            fillImageHref: marker.markerFill.imageHref || '',
        } : {};

        const options = Object.assign(
            iconOptions,
            strokeOptions,
            fillOptions,
            marker.balloonOptions,
            marker.options,
        );

        if (markerType === 'Circle') {
            marker.coords = [marker.coords, marker.circleRadius];
        }

        const obj = {
            properties,
            options,
            markerType,
            coords: marker.coords,
            clusterName: marker.clusterName,
        };

        const mapMarker = utils.createMarker(obj, _this.mapComponentContext.useObjectManager, this.$emit);
        if (!_this.mapComponentContext.useObjectManager) {
            const events = this.markerEvents.length ? this.markerEvents : defaultMarkerEvents;
            events.forEach(_ => mapMarker.events.add(_, e => this.$emit(_, e)));
        }
        return mapMarker;
    }
    
};
