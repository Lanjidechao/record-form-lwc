import { LightningElement,api,track } from 'lwc';

export default class BattleBasicInfo extends LightningElement {
    @api recordId
    @track section = [
        {id:'A', name:'Basic Info', fields:[
            {show:'true',name:'Name'},
            {show:'true',name:'Project_Status__c'},
            {show:'true',name:'Weapons_Status__c'},
            {show:'true',name:'Crew_Members__c'},
        ]},
        {id:'B', name:'Weapon Set', fields:[
            {show:'true',name:'Weapon_I__c'},
            {show:'true',name:'Weapon_II__c'},
            {show:'true',name:'Weapon_III__c'},
            {show:'true',name:'Weapon_IV__c'},
            {show:'true',name:'Weapon_V__c'},
            {show:'true',name:'Weapon_VI__c'},
        ]},
    ]
}