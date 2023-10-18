import os
from pymongo import MongoClient

MONGODB_URI = os.environ.get('MONGODB_URI')
MONGODB_DATABASE_NAME = os.environ.get('MONGODB_DATABASE_NAME')

client = MongoClient(MONGODB_URI)
db = client[MONGODB_DATABASE_NAME]
collection = db['my_collection']

def insert_item(item):
    collection.insert_one(item)

def get_all_items():
    result_strings = []
    for result in collection.find({}):
        result_strings.append(str(result))
    return result_strings