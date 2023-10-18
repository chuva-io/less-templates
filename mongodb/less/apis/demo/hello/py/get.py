from mongodb_client_py import insert_item, get_all_items
import json

def process(request, response):
    # Insert item.
    insert_item({ 'bar': 'baz' })

    # Get all items.
    result = get_all_items()
    
    # Return HTTP response.
    response.update({
        "body": json.dumps(result),
        "statusCode": 200
    })

    return response