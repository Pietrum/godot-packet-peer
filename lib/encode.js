module.exports = (variant) => {
  let encoder = './encode/';

  if (variant === null) {
    encoder += 'undefined';
  } else if (typeof variant === 'object') {
    switch (variant.constructor.name) {
      case 'Vector2':
      case 'Rect2':
      case 'Vector3':
      case 'Transform2D':
      case 'Plane':
      case 'Quat':
      case 'AABB':
      case 'Basis':
      case 'Transform':
        encoder += 'math';
        break;
      case 'Color':
        encoder += 'color';
        break;
      case 'NodePath':
        encoder += 'node_path';
        break;
      case 'Array':
        encoder += 'array';
        break;
      default:
        encoder += 'json';
    }
  } else {
    encoder += typeof variant;
  }

  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(encoder)(variant);
};
