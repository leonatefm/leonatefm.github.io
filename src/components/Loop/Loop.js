import './Loop.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as d3 from 'd3';

const classnames = {
  BASE: 'Loop',
  DAKR: 'Loop--dark',
  LIGHT: 'Loop--light',
};

const sizeParams = {
  small: {
    circleMargin: 1,
    circleRadius: 4,
    loopRadius: 30,
    xAdjustment: 2,
    yAdjustment: 2,
  },
  medium: {
    circleMargin: 1,
    circleRadius: 5,
    loopRadius: 40,
    xAdjustment: 3,
    yAdjustment: 3,
  },
  large: {
    circleMargin: 2,
    circleRadius: 6,
    loopRadius: 50,
    xAdjustment: 4,
    yAdjustment: 4,
  },
};

class Loop extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    duration: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    theme: PropTypes.oneOf(['dark', 'light']),
  };

  static defaultProps = {
    duration: 4000,
    size: 'small',
    theme: 'dark',
  };

  svgRef = React.createRef();

  componentDidMount() {
    this.renderLoop();
    this.startAnimation();
  }

  componentDidUpdate() {
    this.clearSvg();
    this.renderLoop();
    this.startAnimation();
  }

  render() {
    const { className, theme } = this.props;

    const rootClassNames = classNames(
      classnames.BASE,
      theme === 'light' ? classnames.LIGHT : classnames.DAKR,
      className
    );

    return (
      <svg
        className={rootClassNames}
        width={this.getLoopWidth()}
        height={this.getLoopHeight()}
        ref={this.svgRef}
      />
    );
  }

  getLoopWidth() {
    const size = this.props.size;
    const { circleMargin, circleRadius, loopRadius } = sizeParams[size];
    return (loopRadius + (circleRadius + circleMargin) * 2) * 4;
  }

  getLoopHeight() {
    const size = this.props.size;
    const { circleMargin, circleRadius, loopRadius } = sizeParams[size];
    return (loopRadius + (circleRadius + circleMargin) * 2) * 2;
  }

  renderLoop() {
    const size = this.props.size;
    const { circleMargin, circleRadius, loopRadius, xAdjustment, yAdjustment } =
      sizeParams[size];
    const loopWidth = this.getLoopWidth();
    const loopHeight = this.getLoopHeight();
    const xOffset =
      (circleRadius + circleMargin) * 2 + loopRadius - xAdjustment;
    const yOffset = circleRadius + circleMargin + yAdjustment;

    const points = [
      [xOffset, yOffset],
      [loopWidth - xOffset, loopHeight - yOffset],
      [loopWidth - xOffset, yOffset],
      [xOffset, loopHeight - yOffset],
    ];

    var loopSvg = d3.select(this.svgRef.current);

    this.loopPath = loopSvg
      .append('path')
      .data([points])
      .attr(
        'd',
        d3.svg
          .line()
          .tension(0) // Catmull–Rom
          .interpolate('cardinal-closed')
      )
      .attr('stroke-width', (circleMargin + circleRadius) * 2);

    this.circle = loopSvg
      .append('circle')
      .attr('r', circleRadius)
      .attr('transform', 'translate(' + points[0] + ')');
  }

  startAnimation = () => {
    const { duration } = this.props;
    this.circle
      .transition()
      .duration(duration)
      .ease('linear')
      .attrTween('transform', this.translateAlong(this.loopPath.node()))
      .each('end', this.startAnimation);
  };

  // Returns an attrTween for translating along the specified path element.
  translateAlong(path) {
    var l = path.getTotalLength();
    return function (d, i, a) {
      return function (t) {
        var p = path.getPointAtLength(t * l);
        return 'translate(' + p.x + ',' + p.y + ')';
      };
    };
  }

  clearSvg() {
    if (this.svgRef.current) {
      d3.select(this.svgRef.current).selectAll('*').remove();
    }
  }
}
export default Loop;
