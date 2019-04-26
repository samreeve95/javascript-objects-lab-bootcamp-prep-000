var recipes = {"key": "value"};

function updateObjectWithKeyAndValue(object, key, value)
{
  Object.assign({}, object, {})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
}

function deleteFromObjectByKey(object, key)
{
  
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key];
}