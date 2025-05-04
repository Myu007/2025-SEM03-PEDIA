const questions = [
  {
    question: "Indicate the term of perinatal period:  ",
    answers: [
      { text: "22 week of gestation - 7 day of life inclusive ", correct: true },
      { text: "1-28 week of gestation", correct: false },
      { text: "From 28 week of gestation – till birth", correct: false },
      { text: "10-12 week of gestation", correct: false },
      { text: "32 week of gestation - 7 day of life inclusive", correct: false },
    ],
  },
  {
    question: "The full- term newborn is a child:",
    answers: [
      { text: " Born in term of 37-42 weeks of gestation ", correct: true },
      { text: "With birth weight 2600 g and more", correct: false },
      { text: "With good suckling and stable body temperature", correct: false },
      { text: "With body length’s 45-46 cm and more", correct: false },
      { text: "From 28 week of gestation – till birth", correct: false },
    ],
  },
  {
    question: "How long the baby is in infancy?",
    answers: [
      { text: "Till 12 months ", correct: true },
      { text: "Till 6 months", correct: false },
      { text: "Till 24 months", correct: false },
      { text: "Till 9 months", correct: false },
      { text: "Till 18 months", correct: false },
    ],
  },
  {
    question: "Middle childhood is the period between?",
    answers: [
      { text: "5-10 years ", correct: true },
      { text: "24 -48 months", correct: false },
      { text: "2-4 years", correct: false },
      { text: "6-12 months", correct: false },
      { text: "7-12 years", correct: false },
    ],
  },
  {
    question: "First 75 days of gestation in ontogenesis is called as?",
    answers: [
      { text: "Embryonic period", correct: true },
      { text: "Implantation period", correct: false },
      { text: "Diplotene period", correct: false },
      { text: "Preconceptional period", correct: false },
      { text: "Perinatal period", correct: false },
    ],
  },
  {
    question: "40 hours in intra uterine development is called as?",
    answers: [
      { text: "Implantation", correct: true },
      { text: "Fixation", correct: false },
      { text: "Fertilization", correct: false },
      { text: "Embryonic phase", correct: false },
      { text: "Organogenesis", correct: false },
    ],
  },
  {
    question: "Which vitamin deficiency is not seen in newborn?",
    answers: [
      { text: "E", correct: true },
      { text: "K", correct: false },
      { text: "D", correct: false },
      { text: "A", correct: false },
      { text: "C", correct: false },
    ],
  },
  {
    question: "Indicate the term of the toddler period:",
    answers: [
      { text: "1-3 years", correct: true },
      { text: "6 months-2 years", correct: false },
      { text: "2-5 years", correct: false },
      { text: "6 months-1 year", correct: false },
      { text: "3-7 years", correct: false },
    ],
  },
  {
    question: "The full- term newborn is a child:",
    answers: [
      { text: "born in term of 37-42 weeks of  gestation", correct: true },
      { text: "with  birth weight 2600 g and more", correct: false },
      { text: "born in term of 28-32 weeks of  gestation", correct: false },
      { text: "with good suckling and stable body temperature ", correct: false },
      { text: "with body length’s 45-48 cm", correct: false },
    ],
  },
  {
    question: "Development of individual organism or anatomical or behavioral feature from the earliest stage of maturity is defined as?",
    answers: [
      { text: "Ontogenesis", correct: true },
      { text: "Organogenesis", correct: false },
      { text: "Fecundation ", correct: false },
      { text: "Embryogenesis", correct: false },
      { text: "Fertilization", correct: false },
    ],
  },
  {
    question: "Term period for embryonic period:",
    answers: [
      { text: "14- 28 days of gestation", correct: true },
      { text: " 14-21 weeks of gestation", correct: false },
      { text: "14 days to 9 weeks of gestation", correct: false },
      { text: "0-14 days of gestation", correct: false },
      { text: "9 weeks to birth", correct: false },
    ],
  },
  {
    question: "How many pairs of spinal nerves are there?",
    answers: [
      { text: "31 pairs", correct: true },
      { text: "27 pairs", correct: false },
      { text: "30 pairs", correct: false },
      { text: "28 pairs", correct: false },
      { text: " 29 pairs", correct: false },
    ],
  },
  {
    question: "Physiologically maximum growth of brain occurs in?",
    answers: [
      { text: "First 2 years of life", correct: true },
      { text: " 2-5 years of life", correct: false },
      { text: "5-7 years of life", correct: false },
      { text: "7-10 years of life", correct: false },
      { text: "12-15 years of life", correct: false },
    ],
  },
  {
    question: "Increase in the length of the child's body at the age of 1-3 months (in centimeters):",
    answers: [
      { text: "3 cm each", correct: true },
      { text: "2 cm each", correct: false },
      { text: "4 cm each", correct: false },
      { text: "5 cm each", correct: false },
      { text: "6 cm each", correct: false },
    ],
  },
  {
    question: "Increase in the length of the child's body at the age of 1-3 months (in centimeters):",
    answers: [
      { text: "2 cm each", correct: true },
      { text: "3 cm each", correct: false },
      { text: "4 cm each", correct: false },
      { text: "5 cm each", correct: false },
      { text: "6 cm each", correct: false },
    ],
  },
  {
    question: "Normal head circumference of newborns:",
    answers: [
      { text: "24-26 sm", correct: true },
      { text: "28-30 sm", correct: false },
      { text: "30-32 sm", correct: false },
      { text: "34-36 sm", correct: false },
      { text: "38-40 sm", correct: false },
    ],
  },
  {
    question: "Increase in the length of the child's body at the age of 1-3 months (in centimeters):",
    answers: [
      { text: "2 cm each", correct: true },
      { text: "3 cm each", correct: false },
      { text: "4 cm each", correct: false },
      { text: "5 cm each", correct: false },
      { text: "6 cm each", correct: false },
    ],
  },
  {
    question: "The average annual gain in height from 2 to 5 years is: ",
    answers: [
      { text: "7,5 cm", correct: true },
      { text: "2,5 cm", correct: false },
      { text: "10,0 cm", correct: false },
      { text: "12,5 cm ", correct: false },
      { text: "5,0 cm", correct: false },
    ],
  },
  {
    question: "Most common cause of short stature is?",
    answers: [
      { text: "Constitutional", correct: true },
      { text: "Hypothyroidism", correct: false },
      { text: "Growth hormone deficiency", correct: false },
      { text: "Systemic illness", correct: false },
      { text: "Immunodeficiency", correct: false },
    ],
  },
  {
    question: "Which of the following is an indicator of brain growth in children?",
    answers: [
      { text: "Height gain", correct: true },
      { text: "Weight gain", correct: false },
      { text: "Number of teeth", correct: false },
      { text: "Head circumference", correct: false },
      { text: "Shoe size", correct: false },
    ],
  },
  {
    question: "Indicate the term of toddler period",
    answers: [
      { text: "1-3 years", correct: true },
      { text: "1-4 years", correct: false },
      { text: "2-4 years", correct: false },
      { text: "3-5 years", correct: false },
      { text: "6 mo.-2 years", correct: false },
    ],
  },
  {
    question: "WHO defines 'Adolescents' as individuals in the:",
    answers: [
      { text: "14-21 years age group", correct: true },
      { text: "13-17 years age group", correct: false },
      { text: "10-19 years age group", correct: false },
      { text: "10-17 years age group", correct: false },
      { text: "15-19 years age group", correct: false },
    ],
  },
  {
    question: "WHO defines 'Youth' as individuals in the ",
    answers: [
      { text: "14-21 years age group", correct: true },
      { text: "15-24 years age group", correct: false },
      { text: "17-25 years age group", correct: false },
      { text: "15-17 years age group", correct: false },
      { text: "15-19 years age group", correct: false },
    ],
  },
  {
    question: "First week of intra uterine development is called as",
    answers: [
      { text: "fecundation", correct: true },
      { text: "Germinal period", correct: false },
      { text: "Developmental period", correct: false },
      { text: "Late fetal period", correct: false },
      { text: "Embryonic period", correct: false },
    ],
  },
  {
    question: "When breastfeeding, the first complementary foods are introduced with:",
    answers: [
      { text: "2 months", correct: true },
      { text: "4 months", correct: false },
      { text: "6 months", correct: false },
      { text: "8 months", correct: false },
      { text: "10 months", correct: false },
    ],
  },
  {
    question: "Indicate the term of perinatal period:  ",
    answers: [
      { text: "10-12 week of gestation", correct: true },
      { text: "1-28 week of gestation", correct: false },
      { text: "From 28 week of gestation – till birth", correct: false },
      { text: "22 week of gestation - 7 day of life inclusive", correct: false },
      { text: "32 week of gestation - 7 day of life inclusive", correct: false },
    ],
  },
  {
    question: "By 6 days postconception age, as implantation begins, the embryo consists of a spherical mass of cells with a central cavity (the blastocyst). Which of the following periods is most likely associated with this description?",
    answers: [
      { text: "Germinal period", correct: true },
      { text: "Embryonic period", correct: false },
      { text: "Early fetal period", correct: false },
      { text: "Late fetal period", correct: false },
      { text: "Prenatal period ", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy had a fever. What of the following most likely is open question about fever? ",
    answers: [
      { text: "Did the child has contacts with rubella patients? ", correct: true },
      { text: "What pets do you have at home? ", correct: false },
      { text: "Are you feeling hot?  ", correct: false },
      { text: "When did the fever start? ", correct: false },
      { text: "Is here cough too? ", correct: false },
    ],
  },
  {
    question: "While taking history of the 13-year-old child the doctor has explored unspoken fear of a poor outcome of the disease. What of the following interviewing skills is most likely has been used by the doctor?",
    answers: [
      { text: "Accepting ", correct: true },
      { text: "Broadening ", correct: false },
      { text: "Clarifying", correct: false },
      { text: "Deepening ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "While taking history of the 13-year-old child the doctor has explored unspoken fear of a poor outcome of the disease. What of the following interviewing skills is most likely has been used by the doctor?",
    answers: [
      { text: "Accepting ", correct: true },
      { text: "Broadening ", correct: false },
      { text: "Clarifying", correct: false },
      { text: "Deepening ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Normal head circumference of newborns:",
    answers: [
      { text: "34-36 sm ", correct: true },
      { text: "28-30 sm", correct: false },
      { text: "30-32 sm", correct: false },
      { text: "24-26 sm", correct: false },
      { text: "38-40 sm", correct: false },
    ],
  },
  {
    question: "The body weight deficit in grade II postnatal malnutrition is:",
    answers: [
      { text: "20-30% ", correct: true },
      { text: "10-15%", correct: false },
      { text: "15-20%", correct: false },
      { text: "5-10%", correct: false },
      { text: "30-35%", correct: false },
    ],
  },
  {
    question: "What is the average monthly weight gain in a healthy child at the age of 6 months:",
    answers: [
      { text: "600 g ", correct: true },
      { text: "200 g", correct: false },
      { text: "400 g", correct: false },
      { text: "100 g", correct: false },
      { text: "800 g", correct: false },
    ],
  },
  {
    question: "The period of the second extension (growth acceleration) falls on age:",
    answers: [
      { text: "8-9 years for boys and 6 - 7 years for girls", correct: true },
      { text: "8- 10 years old for boys and 10 - 12 years old for girls", correct: false },
      { text: "11-12years old for boys and 8-10 years old for girls", correct: false },
      { text: "13-16 years old for boys and 8-10 years old for girls", correct: false },
      { text: "4-6 years for boys and 6-7 years for girls ", correct: false },
    ],
  },
  {
    question: "Head control is possible in infant by:",
    answers: [
      { text: "3 month ", correct: true },
      { text: "2 month", correct: false },
      { text: "4 month", correct: false },
      { text: "1 month", correct: false },
      { text: "5 month", correct: false },
    ],
  },
  {
    question: "The period of the first extension (growth acceleration) falls on the age:",
    answers: [
      { text: "13-16years old for boys and 10 - 12 years old for girls ", correct: true },
      { text: "2-4 years for boys and 3-5 years for girls", correct: false },
      { text: "4-6 years for boys and 9 - 10 years for girls", correct: false },
      { text: "7-9 years for boys and 6-8years for girls", correct: false },
      { text: "8-9 years for boys and 6 - 7 years for girls", correct: false },
    ],
  },
  {
    question: "A gentle stroke on the newborn’s cheek - baby turns toward the touch, with mouth open.What is this reflex?",
    answers: [
      { text: "Root reflex", correct: true },
      { text: "Suck reflex", correct: false },
      { text: "Babinski’s reflex", correct: false },
      { text: "Moro reflex", correct: false },
      { text: "Tonic neck reflex", correct: false },
    ],
  },
  {
    question: "Find the correct formula for BMI calculation.",
    answers: [
      { text: "kg/m2", correct: true },
      { text: "kg2/m", correct: false },
      { text: " kg2/m2", correct: false },
      { text: "kg/m", correct: false },
      { text: "kg/cm2", correct: false },
    ],
  },
  {
    question: "All milk teeth are erupted by__?__ year.",
    answers: [
      { text: "2.5", correct: true },
      { text: "3.5", correct: false },
      { text: "2", correct: false },
      { text: "1.5", correct: false },
      { text: "3.5", correct: false },
    ],
  },
  {
    question: "First visible sign of puberty in girls is?",
    answers: [
      { text: "Thelarche", correct: true },
      { text: "Pubarche", correct: false },
      { text: "Menarche", correct: false },
      { text: "Fertilization", correct: false },
      { text: "Growth spurt", correct: false },
    ],
  },
  {
    question: "Best indicator for nutritional status for a child is?",
    answers: [
      { text: "Rate of increase of height and weight", correct: true },
      { text: "Chest circumference", correct: false },
      { text: "Body size", correct: false },
      { text: "Weight for age", correct: false },
      { text: "Gate of weight", correct: false },
    ],
  },
  {
    question: "Which area of development is assessed by tasks such as drawing, stacking blocks, and copying shapes?",
    answers: [
      { text: "Fine motor skills", correct: true },
      { text: "Gross motor skills", correct: false },
      { text: "Cognitive skills", correct: false },
      { text: "Social skills", correct: false },
      { text: "communication skills", correct: false },
    ],
  },
  {
    question: "How to check head circumference?",
    answers: [
      { text: "It measures the distance from above the brow ridges to occipital ridge ", correct: true },
      { text: "It measures the distance from forehead to back of head", correct: false },
      { text: "It measures the distance from forehead to temporal bone", correct: false },
      { text: "It measures the distance from ear to ear", correct: false },
      { text: "It measures the distance between both temporal bones", correct: false },
    ],
  },
  {
    question: "A gentle stroke on the newborn’s cheek - baby turns toward the touch, with mouth open.What is this reflex?",
    answers: [
      { text: "Root reflex", correct: true },
      { text: "Suck reflex", correct: false },
      { text: "Babinski’s reflex", correct: false },
      { text: "Moro reflex", correct: false },
      { text: "Tonic neck reflex", correct: false },
    ],
  },
  {
    question: "For approximately what length of time do you recommend exclusive breastfeeding?",
    answers: [
      { text: "6 month ", correct: true },
      { text: "4 month", correct: false },
      { text: "2 month", correct: false },
      { text: "8 month", correct: false },
      { text: "10 month", correct: false },
    ],
  },
  {
    question: "Compared with mature milk, colostrum is",
    answers: [
      { text: "Higher in protein, sodium, and fat soluble vitamins ", correct: true },
      { text: "Higher in fat and sodium", correct: false },
      { text: "Lower in sodium, potassium and chloride", correct: false },
      { text: "Lower in fat and carotenoids", correct: false },
      { text: "Higher in water-soluble vitamins", correct: false },
    ],
  },
  {
    question: "The first attachment of a healthy baby to the mother's breast after birth follows:",
    answers: [
      { text: " In the first 30 minutes ", correct: true },
      { text: "After 12 hours", correct: false },
      { text: "In the first 2 hours", correct: false },
      { text: "After 4 hours", correct: false },
      { text: "Right away ", correct: false },
    ],
  },
  {
    question: "What is found more in human milk as compared to cow's milk?",
    answers: [
      { text: "Lactose", correct: true },
      { text: "Amilase", correct: false },
      { text: "Protein", correct: false },
      { text: "Vitamin K", correct: false },
      { text: "Fat", correct: false },
    ],
  },
  {
    question: "Breastfeeding is recommended to continue until",
    answers: [
      { text: " 6 month", correct: true },
      { text: "1 year", correct: false },
      { text: "2 years", correct: false },
      { text: "3 years", correct: false },
      { text: "5 years", correct: false },
    ],
  },
  {
    question: "Mature human milk is excreted from (lactation periods)",
    answers: [
      { text: "3-5 days", correct: true },
      { text: "7-14 days", correct: false },
      { text: "2-3 weeks", correct: false },
      { text: "3-4 weeks", correct: false },
      { text: "5-6 weeks", correct: false },
    ],
  },
  {
    question: "Late (“hind”) breast milk, unlike early (“forward”), contains more",
    answers: [
      { text: "water ", correct: true },
      { text: "fat", correct: false },
      { text: "protein", correct: false },
      { text: "carbohydrate", correct: false },
      { text: "lactose", correct: false },
    ],
  },
  {
    question: "Daily protein requirements for newborns are:",
    answers: [
      { text: "1,8-2,2 g/kg/day", correct: true },
      { text: "1,8-2,2 g/kg/week", correct: false },
      { text: "0,8 -1,2 g/kg/day", correct: false },
      { text: "0,8-1,2 g/kg/week", correct: false },
      { text: "18,0-22,0 g/kg/day", correct: false },
    ],
  },
  {
    question: "The average weight gain of child in first 3 months amounts:",
    answers: [
      { text: "200 g per week", correct: true },
      { text: "300 g per week", correct: false },
      { text: "100 g per week", correct: false },
      { text: "80 g per week", correct: false },
      { text: "250 g per week", correct: false },
    ],
  },
  {
    question: "A child under 6 months of age who is exclusively breastfed should add at least _?_ gr. per month",
    answers: [
      { text: "500", correct: true },
      { text: "700", correct: false },
      { text: "350", correct: false },
      { text: "250", correct: false },
      { text: "650", correct: false },
    ],
  },
  {
    question: "The daily amount of food for a child from 4 to 6 months is:",
    answers: [
      { text: "1/7 of body weight ", correct: true },
      { text: "1/5 of body weight", correct: false },
      { text: "1/6 of body weight", correct: false },
      { text: "1/4 of body weight", correct: false },
      { text: "1/8 of body weight", correct: false },
    ],
  },
  {
    question: "Daily protein requirement in a 2-year old child is?",
    answers: [
      { text: "2,2-2,9 gm/kg", correct: true },
      { text: "3,2-4,0 gm/kg", correct: false },
      { text: "1,5-1, 8gm/kg", correct: false },
      { text: "12-12,9 gm/kg", correct: false },
      { text: "13-13,5 gm/kg", correct: false },
    ],
  },
  {
    question: "Which of the following signs corresponds to galactosemia",
    answers: [
      { text: "jaundice, constipation", correct: true },
      { text: "diarrhea, poor weight gain", correct: false },
      { text: "vomiting, fever", correct: false },
      { text: "rare urination, fever", correct: false },
      { text: "abdominal pain, constipation", correct: false },
    ],
  },
  {
    question: "When feeding children in the first months of life, a regimen should be preferred",
    answers: [
      { text: "feedings at fixed hours, but the amount of food is determined by the child", correct: true },
      { text: "regulated feeding by hours and volume", correct: false },
      { text: "feeding regimen does not matter", correct: false },
      { text: "free feeding (feeding \"on demand\")", correct: false },
      { text: "feeding controlled by mother", correct: false },
    ],
  },
  {
    question: "If an inverted nipple is detected during pregnancy",
    answers: [
      { text: "use special nipple shapers from 32 weeks of pregnancy", correct: true },
      { text: "do not stop the procedure for pulling the nipple even with the threat of termination of pregnancy", correct: false },
      { text: "stop breastfeeding", correct: false },
      { text: "buy bottles in advance", correct: false },
      { text: "look for a donor", correct: false },
    ],
  },
  {
    question: "A full-term newborn at the age of 20 days is transferred to artificial feeding with an adapted milk formula. Determine the frequency of feeding for this child:",
    answers: [
      { text: " 10 times a day", correct: true },
      { text: "7 times a day", correct: false },
      { text: "5 times a day", correct: false },
      { text: "3 times a day", correct: false },
      { text: "on the mothers wish", correct: false },
    ],
  },
  {
    question: "At the reception, a mother with a child aged 3 months. Complaints: restless child, intermittent sleep. Body weight 5000g. (at birth 3000g). After feeding, when expressing, there is no milk. The doctor suggests that the mother has low milk supply. What recommendations does a mother need to improve lactation?",
    answers: [
      { text: "limiting fluid intake", correct: true },
      { text: "drinking liquid 20 minutes before feeding", correct: false },
      { text: "taking spices 20 minutes before feeding", correct: false },
      { text: "limiting protein intake", correct: false },
      { text: "limiting carbohydrate intake", correct: false },
    ],
  },
  {
    question: "Child, 15 days old. Healthy. She is breastfed. When consulting the mother, the doctor recommended following the principle of “frequent breastfeeding.” Explain to the mother the importance of following this principle:",
    answers: [
      { text: "ensuring sustainable lactation", correct: true },
      { text: "suppression of the child’s enzyme secretion", correct: false },
      { text: "maternal weight gain", correct: false },
      { text: "decreased immunity of the child", correct: false },
      { text: "late teething in a child", correct: false },
    ],
  },
  {
    question: "Please calculate the amount of formula milk by Caloric Requirement Method, if you know the body weight is 4 kg and the feeding frequency- 6 times daily:",
    answers: [
      { text: "100 ml per feeding", correct: true },
      { text: "80 ml per feeding", correct: false },
      { text: "150 ml per feeding", correct: false },
      { text: "60 ml per feeding", correct: false },
      { text: "220 ml per feeding", correct: false },
    ],
  },
  {
    question: "Evidence of breast milk insufficiency in a child up to 6 months:",
    answers: [
      { text: "urination 6-8 times a day", correct: true },
      { text: "urination 10-12 times a day", correct: false },
      { text: "weight gain 30 gr/day", correct: false },
      { text: "crying a lot", correct: false },
      { text: "quickly becomes tired", correct: false },
    ],
  },
  {
    question: "What is the more important factor to stop mother milk secretion?",
    answers: [
      { text: "the breast remains full of milk", correct: true },
      { text: " squeezing or tingling sensation in her breasts", correct: false },
      { text: "small size of the breasts", correct: false },
      { text: "milk flowing from her breasts in fine streams, if her baby comes off the breast during a feed.", correct: false },
      { text: " pain from uterine contraction", correct: false },
    ],
  },
  {
    question: "A child is 4.5 months old with a weight of 6650. How many ml of artificial mixture should a mother give per day",
    answers: [
      { text: "600", correct: true },
      { text: "700", correct: false },
      { text: "800", correct: false },
      { text: "900", correct: false },
      { text: "1000", correct: false },
    ],
  },
  {
    question: "A child is 4.5 months old with a weight of 6650. How much  ml of artificial mixture should a mother give at one  time?",
    answers: [
      { text: "120", correct: true },
      { text: "140", correct: false },
      { text: "160", correct: false },
      { text: "220", correct: false },
      { text: "220", correct: false },
    ],
  },
  {
    question: "The age of the child is considered the optimal time for the introduction of the basic complementary foods (additional food):",
    answers: [
      { text: "6 month ", correct: true },
      { text: "4 month", correct: false },
      { text: "2 month", correct: false },
      { text: "8 month", correct: false },
      { text: "10 month", correct: false },
    ],
  },
  {
    question: "Complementary foods on breastfeeding are introduced at the age (months):",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "While taking history of the 1-year-old child the doctor has summarized the information. What of the following interviewing skills is most likely has been used by the doctor?",
    answers: [
      { text: "Accepting ", correct: true },
      { text: "Broadening ", correct: false },
      { text: "Clarifying", correct: false },
      { text: "Deepening ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "While taking history of the 1-year-old child there were no physical barriers between doctor and mother. What of the following interviewing skills is most likely has been used by the doctor?",
    answers: [
      { text: "Accepting ", correct: true },
      { text: "Broadening ", correct: false },
      { text: "Clarifying", correct: false },
      { text: "Deepening ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of infant formulas is recommended for infants with documented IgE-mediated allergy to cow’s milk protein:",
    answers: [
      { text: "Soy-Based Infant Formula", correct: true },
      { text: "Goat’s Milk", correct: false },
      { text: " Milk-Based Infant Formula", correct: false },
      { text: " Lactose-Free Infant Formula", correct: false },
      { text: "Iron-Fortified Infant Formula", correct: false },
    ],
  },
  {
    question: "Most health authorities recommend that solid food should be given to the infant at what age?",
    answers: [
      { text: "4-6 months", correct: true },
      { text: "7-9 months", correct: false },
      { text: "1-2 months", correct: false },
      { text: "3-4 months", correct: false },
      { text: "10-12 months", correct: false },
    ],
  },
  {
    question: "Baby is 4 weeks ol Weight 3500 g. The daily volume of food according to the volumetric method should be:",
    answers: [
      { text: "480ml of body weight", correct: true },
      { text: "630 ml of body weight", correct: false },
      { text: "720 ml of body weight", correct: false },
      { text: "900 ml of body weight", correct: false },
      { text: "1000ml of body weight", correct: false },
    ],
  },
  {
    question: "Baby 1.5 months Weight 4400 g. Approximate amount of milk needed to feed a baby:",
    answers: [
      { text: "480ml of body weight", correct: true },
      { text: "630 ml of body weight", correct: false },
      { text: "720 ml of body weight", correct: false },
      { text: "900 ml of body weight", correct: false },
      { text: "1000ml of body weight", correct: false },
    ],
  },
  {
    question: "Rules for artificial feeding with adapted mixtures:",
    answers: [
      { text: "The timing of the introduction of nutritional supplements, as with natural feeding", correct: true },
      { text: "the timing of the introduction of nutritional supplements and complementary foods 2-3 weeks earlier than with natural feeding", correct: false },
      { text: "later transfer to 5-6 meals a day", correct: false },
      { text: "the timing of the introduction of complementary foods 2-3 weeks later than breastfeeding", correct: false },
      { text: "the timing of the introduction of complementary foods 5-6 weeks later than breastfeeding", correct: false },
    ],
  },
  {
    question: "The daily volume of nutrition of a child aged 5 days, born weighing 3400 g, is:",
    answers: [
      { text: "200 ml", correct: true },
      { text: "400 ml", correct: false },
      { text: "600 ml", correct: false },
      { text: "800 ml", correct: false },
      { text: "900 ml ml per day", correct: false },
    ],
  },
  {
    question: "Baby 1 month old Is breastfed, body weight at birth - 3200 Calculate the daily amount of food:",
    answers: [
      { text: "550 ml per day", correct: true },
      { text: "660 ml per day", correct: false },
      { text: "450-500 ml per day", correct: false },
      { text: "850-900 ml per day", correct: false },
      { text: "300-350 ml per day", correct: false },
    ],
  },
  {
    question: "The deficit in body weight at the I degree of malnutrition is:",
    answers: [
      { text: "10-15% ", correct: true },
      { text: "5-10%", correct: false },
      { text: "25-30%", correct: false },
      { text: "15-20% ", correct: false },
      { text: "30-35%", correct: false },
    ],
  },
  {
    question: "What type of infant formula can cause microscopic bleeding and blood loss from an infant’s immature gastrointestinal tract?",
    answers: [
      { text: "Lactose-Free Infant Formula ", correct: true },
      { text: "Iron-Fortified Infant Formula ", correct: false },
      { text: "Whole Cow’s Milk", correct: false },
      { text: "Soy-Based Infant Formula ", correct: false },
      { text: "Hypoallergenic Infant Formula ", correct: false },
    ],
  },
  {
    question: "What volume of daily amount of milk is needed for a newborn at the age of 7 days, born with a weight of 3000 g",
    answers: [
      { text: "480 ml", correct: true },
      { text: "360 ml", correct: false },
      { text: "540 ml", correct: false },
      { text: "300 ml", correct: false },
      { text: "620 ml", correct: false },
    ],
  },
  {
    question: "What volume of daily amount of milk is needed for a newborn at the age of 2 month, born with a weight of 3500 g",
    answers: [
      { text: "540 ml", correct: true },
      { text: "480 ml", correct: false },
      { text: "630 ml", correct: false },
      { text: "500 ml", correct: false },
      { text: "720 ml", correct: false },
    ],
  },
  {
    question: "What means the term - “fortified food”?",
    answers: [
      { text: "A food enriched with minerals and vitamins", correct: true },
      { text: "Additional food ", correct: false },
      { text: "Partially fermented food", correct: false },
      { text: "Additional food ", correct: false },
      { text: "A food enriched with proteins and fats", correct: false },
    ],
  },
  {
    question: "The most common infant formula consumed by infants, made from modified cow’s milk with added carbohydrate (usually lactose), vegetable oils, vitamins and minerals:",
    answers: [
      { text: "Milk-Based Infant Formula", correct: true },
      { text: "Iron-Fortified Infant Formula", correct: false },
      { text: "Soy-Based Infant Formula ", correct: false },
      { text: "Lactose-Free InfantFormula", correct: false },
      { text: "Hypoallergenic Infant Formula", correct: false },
    ],
  },
  {
    question: "Orange colored vegetables and fruits are useful for child to provide:",
    answers: [
      { text: "Vitamin A", correct: true },
      { text: "Vitamin B", correct: false },
      { text: "Vitamin K", correct: false },
      { text: "Vitamin E", correct: false },
      { text: "Vitamin D", correct: false },
    ],
  },
  {
    question: "Animal products and legumes are foods that help a child to grow, they contain a lot of:",
    answers: [
      { text: "Proteins and iron", correct: true },
      { text: "Fats and vitamins", correct: false },
      { text: "Are not useful for a child", correct: false },
      { text: "Minerals and salts", correct: false },
      { text: "Carbohydrates and iron", correct: false },
    ],
  },
  {
    question: " Regarding nutritional requirement during childhood, all the following are true EXCEPT ",
    answers: [
      { text: "nutrition and growth during 3-6 years of life predict adult stature and some health outcomes  ", correct: true },
      { text: " major risk period for growth stunting  is between 4 and 24 months of age  ", correct: false },
      { text: " estimated average requirement (EAR) is the average daily nutrient intake level estimated to meet the requirements for 50% of the population ", correct: false },
      { text: "recommended dietary allowance (RDA) is an estimate of the daily average nutrient intake to meet the nutritional needs of >97% of the individuals in a population ", correct: false },
      { text: "the 3 components of energy expenditure are the basal metabolic rate, thermal effect of food, and energy for physical activity ", correct: false },
    ],
  },
  {
    question: "The reason for the transfer of the child to mixed feeding is",
    answers: [
      { text: "inadequate weight gain", correct: true },
      { text: "hypogalactia", correct: false },
      { text: "physiological jaundice", correct: false },
      { text: "mom's wish", correct: false },
      { text: "an infectious disease in a child", correct: false },
    ],
  },
  {
    question: "The daily amount of food for a child from 2 to 4 months is:",
    answers: [
      { text: "1/4 of body weight", correct: true },
      { text: "1/5 of body weight", correct: false },
      { text: "1/6 of body weight", correct: false },
      { text: "1/7 of body weight", correct: false },
      { text: "1/8 of body weight", correct: false },
    ],
  },
  {
    question: "Hyponatremia clinically significant when the serum sodium levels is less than:",
    answers: [
      { text: " 135 mmol /L. ", correct: true },
      { text: " 115 mmol /L.", correct: false },
      { text: "95 mmol /L.", correct: false },
      { text: " 155 mmol /L.", correct: false },
      { text: " 175 mmol /L.", correct: false },
    ],
  },
  {
    question: "Normal plasma magnesium concentration is ",
    answers: [
      { text: "1.7-2.1 mg/dL", correct: true },
      { text: "0.7-1.2 mg/dL", correct: false },
      { text: "3.1-3.5 mg/dL", correct: false },
      { text: "2.5-2.8 mg/dL", correct: false },
      { text: "2.2-2.4 mg/dL", correct: false },
    ],
  },
  {
    question: "Contraindications to natural feeding on the part of the child are",
    answers: [
      { text: " hypolactasia", correct: true },
      { text: "pronounced manifestations of allergic diathesis", correct: false },
      { text: "celiac disease", correct: false },
      { text: "phenylketonuria;", correct: false },
      { text: "cystic fibrosis", correct: false },
    ],
  },
  {
    question: "Which of the following foods is given to a healthy baby as a first food?:",
    answers: [
      { text: "cottage cheese", correct: true },
      { text: "meat", correct: false },
      { text: "yogurt", correct: false },
      { text: "porridge", correct: false },
      { text: "egg", correct: false },
    ],
  },
  {
    question: "Kwashiorkor is due to deficiency of",
    answers: [
      { text: "proteins", correct: true },
      { text: "calories", correct: false },
      { text: "vitamins", correct: false },
      { text: "carbohydrates", correct: false },
      { text: "minerals", correct: false },
    ],
  },
  {
    question: "A chronic malnutrition is:",
    answers: [
      { text: "low weight+short stature ", correct: true },
      { text: "normal stature+low weight", correct: false },
      { text: "normal weight+short stature", correct: false },
      { text: "normal weight+ normal stature", correct: false },
      { text: "low weight+high stature", correct: false },
    ],
  },
  {
    question: "The lower limit of serum ferritin is:",
    answers: [
      { text: "10 ng/dl", correct: true },
      { text: "50 ng/dl", correct: false },
      { text: "15 ng/dl", correct: false },
      { text: "20 ng/dl", correct: false },
      { text: "5 ng/dl", correct: false },
    ],
  },
  {
    question: "What the Kwashiorkor means?",
    answers: [
      { text: "Protein malabsorption", correct: true },
      { text: "Carbohydrate malabsorption", correct: false },
      { text: "Congenital defect", correct: false },
      { text: "Fat malabsorption", correct: false },
      { text: "Immunocomplex disease", correct: false },
    ],
  },
  {
    question: "Diagnosis of kwashiorkor is based on signs?",
    answers: [
      { text: "Edema and mental changes", correct: true },
      { text: "Skinny and mental changes", correct: false },
      { text: "Weight loss and mental changes", correct: false },
      { text: "Bitot spots and hepatomegaly", correct: false },
      { text: "Increased weight and edema", correct: false },
    ],
  },
  {
    question: "In what disease is the Casal necklace determined?",
    answers: [
      { text: "Pellagra", correct: true },
      { text: "Marasmus", correct: false },
      { text: "Scurvy", correct: false },
      { text: "Kwashiorkor", correct: false },
      { text: "Rickets", correct: false },
    ],
  },
  {
    question: "Windswept deformity is characteristically seen in _?_",
    answers: [
      { text: "Rickets", correct: true },
      { text: "Achondroplasia", correct: false },
      { text: "Rheumatoid arthritis", correct: false },
      { text: "Scurvy", correct: false },
      { text: "Osteoarthritis", correct: false },
    ],
  },
  {
    question: "4-6 years is which period for a child?",
    answers: [
      { text: "Preschool period ", correct: true },
      { text: "Developmental period", correct: false },
      { text: "Toddler period", correct: false },
      { text: "Middle childhood period ", correct: false },
      { text: "Infant period ", correct: false },
    ],
  },
  {
    question: "The premature baby is :",
    answers: [
      { text: "Less than 38weeks ", correct: true },
      { text: "Less than 12 weeks", correct: false },
      { text: "Less than 26 weeks", correct: false },
      { text: "Less than 16 weeks", correct: false },
      { text: "Less than 42 weeks", correct: false },
    ],
  },
  {
    question: "Neonatal period extends up to of life",
    answers: [
      { text: "28 days ", correct: true },
      { text: "21 days", correct: false },
      { text: "14 days", correct: false },
      { text: "7 days", correct: false },
      { text: "30 days", correct: false },
    ],
  },
  {
    question: "Term period for embryonic period:",
    answers: [
      { text: "14 days to 9 weeks of gestation ", correct: true },
      { text: " 14-21 weeks of gestation", correct: false },
      { text: "14- 28 days of gestation", correct: false },
      { text: "0-14 days of gestation", correct: false },
      { text: "9 weeks to birth", correct: false },
    ],
  },
  {
    question: "WHO defines adolescent age group as:",
    answers: [
      { text: " 10-19 years", correct: true },
      { text: " 14-21 years", correct: false },
      { text: "15-19 years", correct: false },
      { text: " 10-17 years", correct: false },
      { text: " 17-21 years", correct: false },
    ],
  },
  {
    question: "All of the following are the criteria to assess the patient’s general condition except:",
    answers: [
      { text: "Complaints", correct: true },
      { text: "Position in bed", correct: false },
      { text: "Consciousness", correct: false },
      { text: "Reaction to the external stimuli", correct: false },
      { text: "Moving of extremities", correct: false },
    ],
  },
  {
    question: "WHO defines 'Youth' as individuals in the ",
    answers: [
      { text: "15-24 years age group ", correct: true },
      { text: "14-21 years age group", correct: false },
      { text: "17-25 years age group", correct: false },
      { text: "15-17 years age group", correct: false },
      { text: "15-19 years age group", correct: false },
    ],
  },
  {
    question: "Which of the following is considered as viable birth?",
    answers: [
      { text: "Gestational age 24 weeks body weight 600 gram ", correct: true },
      { text: "Gestational age 15 weeks body weight 250 gram", correct: false },
      { text: "Gestational age 20 weeks body weight 400 gram", correct: false },
      { text: "Gestational age 22 weeks body weight 500 gram", correct: false },
      { text: "Gestational age 10 weeks body weight 300 gram", correct: false },
    ],
  },
  {
    question: "If a baby is born at 38 weeks of gestation, it is",
    answers: [
      { text: "Term baby ", correct: true },
      { text: "Preterm baby", correct: false },
      { text: "Low preterm baby", correct: false },
      { text: "Post term baby", correct: false },
      { text: "Still birth", correct: false },
    ],
  },
  {
    question: "A 2 year old comes in for a well baby check-up. She should be able to do all of the following except:",
    answers: [
      { text: "turn pages one at a time", correct: true },
      { text: "use 2-3 word phrases", correct: false },
      { text: "follow two step commands", correct: false },
      { text: "participate in group play", correct: false },
      { text: "be able to use a spoon", correct: false },
    ],
  },
  {
    question: "What is natal history",
    answers: [
      { text: "Problems faced during first week of life", correct: true },
      { text: "History of present illness", correct: false },
      { text: "History after birth", correct: false },
      { text: "History of delivery", correct: false },
      { text: "Developmental history", correct: false },
    ],
  },
  {
    question: "The full- term newborn is a child:",
    answers: [
      { text: "With good suckling and stable body temperature", correct: true },
      { text: "With birth weight 2600 g and more", correct: false },
      { text: "Born in term of 37-42 weeks of gestation", correct: false },
      { text: "With body length’s 45-46 cm and more", correct: false },
      { text: "From 28 week of gestation – till birth", correct: false },
    ],
  },
  {
    question: "4-6 years is which period for a child?",
    answers: [
      { text: "Infant period", correct: true },
      { text: "Preschool period", correct: false },
      { text: "Toddler period", correct: false },
      { text: "Middle childhood period ", correct: false },
      { text: "Developmental period", correct: false },
    ],
  },
  {
    question: "Neonatal period extends up to of life",
    answers: [
      { text: "7 days", correct: true },
      { text: "21 days", correct: false },
      { text: "14 days", correct: false },
      { text: "28 days", correct: false },
      { text: "30 days", correct: false },
    ],
  },
  {
    question: "Term period for embryonic period:",
    answers: [
      { text: "14- 28 days of gestation", correct: true },
      { text: " 14-21 weeks of gestation", correct: false },
      { text: "14 days to 9 weeks of gestation", correct: false },
      { text: "0-14 days of gestation", correct: false },
      { text: "9 weeks to birth", correct: false },
    ],
  },
  {
    question: "Normal head circumference of newborns:",
    answers: [
      { text: "24-26 sm", correct: true },
      { text: "28-30 sm", correct: false },
      { text: "30-32 sm", correct: false },
      { text: "34-36 sm", correct: false },
      { text: "38-40 sm", correct: false },
    ],
  },
  {
    question: "Increase in the length of the child's body at the age of 1-3 months (in centimeters):",
    answers: [
      { text: "2 cm each", correct: true },
      { text: "3 cm each", correct: false },
      { text: "4 cm each", correct: false },
      { text: "5 cm each", correct: false },
      { text: "6 cm each", correct: false },
    ],
  },
  {
    question: "Which of the following is a common tool for assessing growth in children under 2 years old?",
    answers: [
      { text: "Body mass index", correct: true },
      { text: "Head circumference measurement", correct: false },
      { text: "Dental exam", correct: false },
      { text: " Hearing test", correct: false },
      { text: "Vision test", correct: false },
    ],
  },
  {
    question: "What is the purpose of using growth charts in children?",
    answers: [
      { text: "To diagnose medical conditions related to growth", correct: true },
      { text: "To track a child's growth over time and detect growth abnormalities", correct: false },
      { text: "To determine a child's ideal height and weight based on age and gender", correct: false },
      { text: "To predict a child's future growth potential", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential sign that a baby is getting enough milk during breastfeeding?",
    answers: [
      { text: "Frequent urination and bowel movements", correct: true },
      { text: "Refusing to breastfeed", correct: false },
      { text: "Sleeping for long periods of time", correct: false },
      { text: "Rapid weight loss", correct: false },
      { text: "Dark yellow urine", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential limitation of using height as an indicator of growth?",
    answers: [
      { text: "Height is the most reliable and accurate indicator of growth", correct: true },
      { text: "Height can be affected by genetic factors", correct: false },
      { text: "Height does not change significantly over time", correct: false },
      { text: "Height is not affected by malnutrition or illness", correct: false },
      { text: "Height can be measured accurately without any specialized equipment", correct: false },
    ],
  },
  {
    question: "Which of the following is an indicator of brain growth in children?",
    answers: [
      { text: "Height gain", correct: true },
      { text: "Weight gain", correct: false },
      { text: "Number of teeth", correct: false },
      { text: "Head circumference", correct: false },
      { text: "Shoe size", correct: false },
    ],
  },
  {
    question: "Indicate the term of toddler period",
    answers: [
      { text: "1-3 years", correct: true },
      { text: "1-4 years", correct: false },
      { text: "2-4 years", correct: false },
      { text: "3-5 years", correct: false },
      { text: "6 mo.-2 years", correct: false },
    ],
  },
  {
    question: "WHO defines 'Adolescents' as individuals in the:",
    answers: [
      { text: "14-21 years age group", correct: true },
      { text: "13-17 years age group", correct: false },
      { text: "10-19 years age group", correct: false },
      { text: "10-17 years age group", correct: false },
      { text: "15-19 years age group", correct: false },
    ],
  },
  {
    question: "WHO defines 'Youth' as individuals in the ",
    answers: [
      { text: "14-21 years age group", correct: true },
      { text: "15-24 years age group", correct: false },
      { text: "17-25 years age group", correct: false },
      { text: "15-17 years age group", correct: false },
      { text: "15-19 years age group", correct: false },
    ],
  },
  {
    question: "First week of intra uterine development is called as",
    answers: [
      { text: "fecundation", correct: true },
      { text: "Germinal period", correct: false },
      { text: "Developmental period", correct: false },
      { text: "Late fetal period", correct: false },
      { text: "Embryonic period", correct: false },
    ],
  },
  {
    question: "While taking history of the 5-year-old child the doctor has used open ended questions. What of the following interviewing skills is most likely has been used by the doctor?",
    answers: [
      { text: "Accepting ", correct: true },
      { text: "Broadening ", correct: false },
      { text: "Clarifying", correct: false },
      { text: "Deepening ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy had a fever. What of the following most likely is open question about fever? ",
    answers: [
      { text: "Did the child has contacts with rubella patients? ", correct: true },
      { text: "What pets do you have at home? ", correct: false },
      { text: "Are you feeling hot?  ", correct: false },
      { text: "When did the fever start? ", correct: false },
      { text: "Is here cough too? ", correct: false },
    ],
  },
  {
    question: "While taking history of the 13-year-old child the doctor has explored unspoken fear of a poor outcome of the disease. What of the following interviewing skills is most likely has been used by the doctor?",
    answers: [
      { text: "Accepting ", correct: true },
      { text: "Broadening ", correct: false },
      { text: "Clarifying", correct: false },
      { text: "Deepening ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy had a fever. What of the following most likely is open question about fever? ",
    answers: [
      { text: "Did the child has contacts with rubella patients? ", correct: true },
      { text: "What pets do you have at home? ", correct: false },
      { text: "Are you feeling hot?  ", correct: false },
      { text: "When did the fever start? ", correct: false },
      { text: "Is here cough too? ", correct: false },
    ],
  },
  {
    question: "Oliguria in infants is a sign of the urine output equal:",
    answers: [
      { text: " 1.5ml / kg / h", correct: true },
      { text: " 0.3 ml / kg /h", correct: false },
      { text: " 0.5 ml / kg /h;", correct: false },
      { text: " 0 ml / kg /h", correct: false },
      { text: " 0.1 ml / kg /h;", correct: false },
    ],
  },
  {
    question: "Number of the deciduous teeth is:",
    answers: [
      { text: "20", correct: true },
      { text: "32", correct: false },
      { text: "16", correct: false },
      { text: "24", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "All milk teeth are erupted by__?__ year.",
    answers: [
      { text: "2.5", correct: true },
      { text: "1.5", correct: false },
      { text: "4", correct: false },
      { text: "3.5", correct: false },
      { text: "1.2", correct: false },
    ],
  },
  {
    question: "When is the plentiful salivation observed at children?",
    answers: [
      { text: "3-4 months ", correct: true },
      { text: "1-2 months", correct: false },
      { text: "5-6 months", correct: false },
      { text: "7-8 months", correct: false },
      { text: "9-10 months", correct: false },
    ],
  },
  {
    question: "Vesicular breathing begins to be heard in older children at:",
    answers: [
      { text: "8-10 year ", correct: true },
      { text: "10-12 year", correct: false },
      { text: "2-4 year", correct: false },
      { text: "7-8 year", correct: false },
      { text: "4-5 year", correct: false },
    ],
  },
  {
    question: "Which area of development is assessed by tasks such as drawing, stacking blocks, and copying shapes?",
    answers: [
      { text: "Fine motor skills", correct: true },
      { text: "Gross motor skills", correct: false },
      { text: "Cognitive skills", correct: false },
      { text: "Social skills", correct: false },
      { text: "communication skills", correct: false },
    ],
  },
  {
    question: "At what age, on average, does a child hold his head well and turn in an upright position?",
    answers: [
      { text: "2 weeks", correct: true },
      { text: "3  weeks", correct: false },
      { text: "4  weeks", correct: false },
      { text: "2 months", correct: false },
      { text: "2 months", correct: false },
    ],
  },
  {
    question: "The child’s body length is 63.5; body weight -6800.0; head circumference – 39cm; chest circumference – 39cm. Please indicate the child's age:",
    answers: [
      { text: "2 months", correct: true },
      { text: "4 months", correct: false },
      { text: "7 months", correct: false },
      { text: "9 months", correct: false },
      { text: "12 months", correct: false },
    ],
  },
  {
    question: "The child’s height is -106cm; weight-19kg; head circumference -52cm; chest circumference –43 cm. Please indicate the age of the child:",
    answers: [
      { text: "2 years", correct: true },
      { text: "5 years", correct: false },
      { text: "7 years", correct: false },
      { text: "8 years", correct: false },
      { text: "10 years", correct: false },
    ],
  },
  {
    question: "Which area of development is assessed by tasks such as drawing, stacking blocks, and copying shapes?",
    answers: [
      { text: "Fine motor skills", correct: true },
      { text: "Gross motor skills", correct: false },
      { text: "Cognitive skills", correct: false },
      { text: "Social skills", correct: false },
      { text: "communication skills", correct: false },
    ],
  },
  {
    question: "At what age, on average, does a child hold his head well and turn in an upright position?",
    answers: [
      { text: "2 weeks", correct: true },
      { text: "3  weeks", correct: false },
      { text: "4  weeks", correct: false },
      { text: "2 months", correct: false },
      { text: "2 months", correct: false },
    ],
  },
  {
    question: "The child’s body length is 63.5; body weight -6800.0; head circumference – 39cm; chest circumference – 39cm. Please indicate the child's age:",
    answers: [
      { text: "2 months", correct: true },
      { text: "4 months", correct: false },
      { text: "7 months", correct: false },
      { text: "9 months", correct: false },
      { text: "12 months", correct: false },
    ],
  },
  {
    question: "The child’s height is -106cm; weight-19kg; head circumference -52cm; chest circumference –43 cm. Please indicate the age of the child:",
    answers: [
      { text: "2 years", correct: true },
      { text: "5 years", correct: false },
      { text: "7 years", correct: false },
      { text: "8 years", correct: false },
      { text: "10 years", correct: false },
    ],
  },
  {
    question: "Please indicate the average body weight of a child at 1 year of age:",
    answers: [
      { text: "8 kg;", correct: true },
      { text: "9 kg;", correct: false },
      { text: "10.4-11 kg;", correct: false },
      { text: "12 kg", correct: false },
      { text: "13 kg", correct: false },
    ],
  },
  {
    question: "The advantage of breast milk over cow milk",
    answers: [
      { text: "high protein content", correct: true },
      { text: "high content of vitamins", correct: false },
      { text: "high calorie content", correct: false },
      { text: "the optimal ratio of nutrients", correct: false },
      { text: "high content water", correct: false },
    ],
  },
  {
    question: "What is the main component of fat in breast milk?",
    answers: [
      { text: "cholesterol", correct: true },
      { text: " Phospholipids", correct: false },
      { text: "Free fatty acids", correct: false },
      { text: "Triglycerides", correct: false },
      { text: "Saturated fatty acids", correct: false },
    ],
  },
  {
    question: "which of the immunoglobulins is found in large quantities in breast milk",
    answers: [
      { text: "immunoglobulin M", correct: true },
      { text: "immunoglobulin G;", correct: false },
      { text: "immunoglobulin A", correct: false },
      { text: " immunoglobulin E", correct: false },
      { text: "immunoglobulin D", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential consequence of exclusive breastfeeding for the first 6 months of life?",
    answers: [
      { text: "Reduced risk of infections and illnesses", correct: true },
      { text: "Increased risk of malnutrition and dehydration", correct: false },
      { text: "Delayed cognitive development", correct: false },
      { text: "Increased risk of tooth decay", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential consequence of inadequate breastfeeding in a child?",
    answers: [
      { text: "Reduced risk of allergies", correct: true },
      { text: "Increased risk of obesity", correct: false },
      { text: " Improved cognitive development", correct: false },
      { text: "Reduced risk of infections and illnesses", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential benefit of continued breastfeeding beyond 6 months of age?",
    answers: [
      { text: " Improved cognitive development", correct: true },
      { text: "Reduced risk of malnutrition and dehydration", correct: false },
      { text: "Reduced risk of tooth decay", correct: false },
      { text: " Improved immune function", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is a recommended guideline for breastfeeding infants?",
    answers: [
      { text: "Breastfeed on a strict schedule, with a set number of minutes per feeding", correct: true },
      { text: "Switch sides only once during each feeding", correct: false },
      { text: "Allow the infant to nurse for as long as they want on each side", correct: false },
      { text: "Use a pacifier to reduce the frequency of feedings", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential concern related to breastfeeding for mothers?",
    answers: [
      { text: "Breastfeeding can reduce the risk of breast cancer", correct: true },
      { text: "Breastfeeding can lead to breast infections", correct: false },
      { text: "Breastfeeding can interfere with the mother's ability to work outside the home", correct: false },
      { text: "Breastfeeding can lead to excessive weight gain in the mother", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How many feedings a child aged 5-12 months should receive per day",
    answers: [
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "Нow to store expressed breast milk?",
    answers: [
      { text: "store in a thermostat at a temperature of 37 degrees C for no more than 3 hours;", correct: true },
      { text: " store in a refrigerator at a temperature not exceeding 4 degrees C for no more than 3-6 hours", correct: false },
      { text: "store at room temperature for no more than 1-2 hours;", correct: false },
      { text: "store in a refrigerator at a temperature not exceeding 10 degrees C for no more than 5 hours", correct: false },
      { text: "store in a thermostat at a temperature of 37 degrees C for no more than 1 hour7", correct: false },
    ],
  },
  {
    question: "Which of the following signs corresponds to galactosemia",
    answers: [
      { text: "jaundice, constipation", correct: true },
      { text: "diarrhea, poor weight gain", correct: false },
      { text: "vomiting, fever", correct: false },
      { text: "rare urination, fever", correct: false },
      { text: "abdominal pain, constipation", correct: false },
    ],
  },
  {
    question: "When feeding children in the first months of life, a regimen should be preferred",
    answers: [
      { text: "feedings at fixed hours, but the amount of food is determined by the child", correct: true },
      { text: "regulated feeding by hours and volume", correct: false },
      { text: "feeding regimen does not matter", correct: false },
      { text: "free feeding (feeding \"on demand\")", correct: false },
      { text: "feeding controlled by mother", correct: false },
    ],
  },
  {
    question: "If an inverted nipple is detected during pregnancy",
    answers: [
      { text: "use special nipple shapers from 32 weeks of pregnancy", correct: true },
      { text: "do not stop the procedure for pulling the nipple even with the threat of termination of pregnancy", correct: false },
      { text: "stop breastfeeding", correct: false },
      { text: "buy bottles in advance", correct: false },
      { text: "look for a donor", correct: false },
    ],
  },
  {
    question: "A 3-month-old child is seen by a pediatrician. Transferred to artificial feeding with an adapted milk formula. Determine the frequency of feeding for this child:",
    answers: [
      { text: "9 times a day", correct: true },
      { text: "6 times a day", correct: false },
      { text: "5 times a day", correct: false },
      { text: "3 times a day", correct: false },
      { text: "on the mothers wish", correct: false },
    ],
  },
  {
    question: "A mother and her 1-month-old baby are visiting a pediatrician. No complaints. The baby receives breast milk. The doctor recommended feeding the baby only breast milk and expressing the remaining milk after feeding. Explain why a mother should express the remaining milk after feeding?",
    answers: [
      { text: "maintain breast shape", correct: true },
      { text: "maintain lactation", correct: false },
      { text: " increase the calorie content of milk", correct: false },
      { text: "increase the interval between feedings", correct: false },
      { text: "stop milk flow", correct: false },
    ],
  },
  {
    question: "7 month old child is being admitted. No complaints. She is breastfed and receives complementary foods in the form of vegetable puree. Mom is wondering if it is possible to give her child ready-made cereals. Explain what is the advantage of the composition of industrially produced “dry porridges” for infants?",
    answers: [
      { text: "enriched with B-lactose", correct: true },
      { text: "high protein content", correct: false },
      { text: "enriched with vitamins", correct: false },
      { text: "low fiber content", correct: false },
      { text: "low fat content", correct: false },
    ],
  },
  {
    question: "what amount of food should a child of 3 months with a body weight of 5400 receive?",
    answers: [
      { text: "400ml", correct: true },
      { text: "600ml", correct: false },
      { text: "700 ml", correct: false },
      { text: "900ml", correct: false },
      { text: "1000ml", correct: false },
    ],
  },
  {
    question: "what amount of food should a child of 1 months  age with a body weight of 4000 receive?",
    answers: [
      { text: "400ml", correct: true },
      { text: "600ml", correct: false },
      { text: "800", correct: false },
      { text: "900", correct: false },
      { text: "1000ml", correct: false },
    ],
  },
  {
    question: "A child is 14 days old with a weight of 3300. How much milk should a child receive per day?",
    answers: [
      { text: "660ml", correct: true },
      { text: "750ml", correct: false },
      { text: "800ml", correct: false },
      { text: "860ml", correct: false },
      { text: "950ml", correct: false },
    ],
  },
  {
    question: "A child is 14 days old and weighs 3300. How much milk should a child receive at one time?",
    answers: [
      { text: "94ml", correct: true },
      { text: "100ml", correct: false },
      { text: "120ml", correct: false },
      { text: "124ml", correct: false },
      { text: "140ml", correct: false },
    ],
  },
  {
    question: "A child is 4.5 months old with a weight of 6650. How many ml of artificial mixture should a mother give per day",
    answers: [
      { text: "600", correct: true },
      { text: "700", correct: false },
      { text: "800", correct: false },
      { text: "900", correct: false },
      { text: "1000", correct: false },
    ],
  },
  {
    question: "A child is 4.5 months old with a weight of 6650. How much  ml of artificial mixture should a mother give at one  time?",
    answers: [
      { text: "120", correct: true },
      { text: "140", correct: false },
      { text: "160", correct: false },
      { text: "220", correct: false },
      { text: "220", correct: false },
    ],
  },
  {
    question: "The child is 5 months old, body weight at birth 3500 g. On artificial feeding.How much food should a child consume at a time?",
    answers: [
      { text: "200ml", correct: true },
      { text: "300ml", correct: false },
      { text: "400ml", correct: false },
      { text: "500ml", correct: false },
      { text: "700ml", correct: false },
    ],
  },
  {
    question: "The body weight of a one-year-old child is on average (in kg):",
    answers: [
      { text: "8kg-9kg", correct: true },
      { text: "7kg-8kg", correct: false },
      { text: "12kg-13kg", correct: false },
      { text: "10,5kg-11kg", correct: false },
      { text: "13kg-14kg", correct: false },
    ],
  },
  {
    question: "Head circumference in full-term newborns at birth is (in cm):",
    answers: [
      { text: "34-36 ", correct: true },
      { text: "28-30", correct: false },
      { text: "30-31", correct: false },
      { text: "32-34", correct: false },
      { text: "37-39", correct: false },
    ],
  },
  {
    question: "The average monthly increase in the head of a child under 1 year of age (in cm):",
    answers: [
      { text: "3.0", correct: true },
      { text: "2.0", correct: false },
      { text: "1.0", correct: false },
      { text: "4.0", correct: false },
      { text: "5.0", correct: false },
    ],
  },
  {
    question: "The advantage of breastfeeding is:",
    answers: [
      { text: "no protection against infection", correct: true },
      { text: "malnutrition", correct: false },
      { text: "helps to avoid excess weight", correct: false },
      { text: "provides balanced nutrition", correct: false },
      { text: "does not provide emotional contact", correct: false },
    ],
  },
  {
    question: "Complementary foods on breastfeeding are introduced at the age (months):",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Rules for artificial feeding with adapted mixtures:",
    answers: [
      { text: "The timing of the introduction of nutritional supplements, as with natural feeding", correct: true },
      { text: "the timing of the introduction of nutritional supplements and complementary foods 2-3 weeks earlier than with natural feeding", correct: false },
      { text: "later transfer to 5-6 meals a day", correct: false },
      { text: "the timing of the introduction of complementary foods 2-3 weeks later than breastfeeding", correct: false },
      { text: "the timing of the introduction of complementary foods 5-6 weeks later than breastfeeding", correct: false },
    ],
  },
  {
    question: "The relative ratio of proteins, fats and carbohydrates in the diet of a child from one to three years old is:",
    answers: [
      { text: "01:02:03", correct: true },
      { text: "02:01:04", correct: false },
      { text: "01:03:06", correct: false },
      { text: "01:01:04", correct: false },
      { text: "01:01:01", correct: false },
    ],
  },
  {
    question: "A boy, 10 months. She is breastfed and receives 3 complementary foods. Explain to your mother what feeding regimen she should follow?",
    answers: [
      { text: "feed every 3 hours", correct: true },
      { text: "interval between feedings 1 hour", correct: false },
      { text: "Alternate 3 complementary foods with breastfeeding", correct: false },
      { text: "3 complementary foods every 3 hours in the first half of the day", correct: false },
      { text: "3 feedings every 3 hours in the afternoon", correct: false },
    ],
  },
  {
    question: "Explain what substance in human milk prevents intestinal infections from developing and stimulates lactic acid bacteria in the intestines?",
    answers: [
      { text: "lactoferrin", correct: true },
      { text: "lysozyme", correct: false },
      { text: "vitamin K", correct: false },
      { text: "immunoglobulin M", correct: false },
      { text: "bifidum factor", correct: false },
    ],
  },
  {
    question: "The daily volume of nutrition of a child aged 5 days, born weighing 3400 g, is:",
    answers: [
      { text: "200 ml", correct: true },
      { text: "400 ml", correct: false },
      { text: "600 ml", correct: false },
      { text: "800 ml", correct: false },
      { text: "900 ml ml per day", correct: false },
    ],
  },
  {
    question: "Baby 1 month old Is breastfed, body weight at birth - 3200 Calculate the daily amount of food:",
    answers: [
      { text: "550 ml per day", correct: true },
      { text: "660 ml per day", correct: false },
      { text: "450-500 ml per day", correct: false },
      { text: "850-900 ml per day", correct: false },
      { text: "300-350 ml per day", correct: false },
    ],
  },
  {
    question: "What type of infant formula can cause microscopic bleeding and blood loss from an infant’s immature gastrointestinal tract?",
    answers: [
      { text: "Lactose-Free Infant Formula ", correct: true },
      { text: "Iron-Fortified Infant Formula ", correct: false },
      { text: "Whole Cow’s Milk", correct: false },
      { text: "Soy-Based Infant Formula ", correct: false },
      { text: "Hypoallergenic Infant Formula ", correct: false },
    ],
  },
  {
    question: "What volume of daily amount of milk is needed for a newborn at the age of 7 days, born with a weight of 3000 g",
    answers: [
      { text: "480 ml", correct: true },
      { text: "360 ml", correct: false },
      { text: "540 ml", correct: false },
      { text: "300 ml", correct: false },
      { text: "620 ml", correct: false },
    ],
  },
  {
    question: "What volume of daily amount of milk is needed for a newborn at the age of 2 month, born with a weight of 3500 g",
    answers: [
      { text: "540 ml", correct: true },
      { text: "480 ml", correct: false },
      { text: "630 ml", correct: false },
      { text: "500 ml", correct: false },
      { text: "720 ml", correct: false },
    ],
  },
  {
    question: "What volume of daily amount of milk is needed for a newborn at the age of 6 month, born with a weight of 3500 g",
    answers: [
      { text: "750 ml", correct: true },
      { text: "630 ml", correct: false },
      { text: "720 ml", correct: false },
      { text: "540 ml", correct: false },
      { text: "900 ml", correct: false },
    ],
  },
  {
    question: "In human milk compared to cow's  milk",
    answers: [
      { text: "a higher protein content", correct: true },
      { text: "does not contain taurine", correct: false },
      { text: "contains alpha lactose", correct: false },
      { text: "the amount of fats and essential fatty acids is lower", correct: false },
      { text: "the amount of proteins is lower, and carbohydrates are higher", correct: false },
    ],
  },
  {
    question: "What type of infant formula is recommended for babies who are not breastfed or who are partially breastfed?",
    answers: [
      { text: "Iron-Fortified Infant Formula ", correct: true },
      { text: "Soy-Based Infant Formula ", correct: false },
      { text: "Hypoallergenic Infant Formula ", correct: false },
      { text: "Whole Cow’s Milk", correct: false },
      { text: "Lactose-Free Infant Formula ", correct: false },
    ],
  },
  {
    question: "What type of infant formula is recommended for babies whose parents are seeking a vegetarian diet for their full-term infant?",
    answers: [
      { text: "Iron-Fortified Infant Formula ", correct: true },
      { text: "Soy-Based Infant Formula ", correct: false },
      { text: "Hypoallergenic Infant Formula ", correct: false },
      { text: "Whole Cow’s Milk", correct: false },
      { text: "Lactose-Free Infant Formula ", correct: false },
    ],
  },
  {
    question: "What type of infant formula is recommended for babies with cow's milk intolerance?",
    answers: [
      { text: "Iron-Fortified Infant Formula ", correct: true },
      { text: "Soy-Based Infant Formula ", correct: false },
      { text: "Hypoallergenic Infant Formula ", correct: false },
      { text: "Whole Cow’s Milk", correct: false },
      { text: "Lactose-Free Infant Formula ", correct: false },
    ],
  },
  {
    question: "What type of infant formula has inappropriate nutrient content?",
    answers: [
      { text: "Iron-Fortified Infant Formula ", correct: true },
      { text: "Soy-Based Infant Formula ", correct: false },
      { text: "Hypoallergenic Infant Formula ", correct: false },
      { text: "Lactose-Free Infant Formula ", correct: false },
      { text: "Whole Cow’s Milk", correct: false },
    ],
  },
  {
    question: "The reason for the transfer of the child to mixed feeding is",
    answers: [
      { text: "inadequate weight gain", correct: true },
      { text: "hypogalactia", correct: false },
      { text: "physiological jaundice", correct: false },
      { text: "mom's wish", correct: false },
      { text: "an infectious disease in a child", correct: false },
    ],
  },
  {
    question: "The daily amount of food for a child from 2 to 4 months is:",
    answers: [
      { text: "1/4 of body weight", correct: true },
      { text: "1/5 of body weight", correct: false },
      { text: "1/6 of body weight", correct: false },
      { text: "1/7 of body weight", correct: false },
      { text: "1/8 of body weight", correct: false },
    ],
  },
  {
    question: "Contraindications to natural feeding on the part of the child are",
    answers: [
      { text: " hypolactasia", correct: true },
      { text: "pronounced manifestations of allergic diathesis", correct: false },
      { text: "celiac disease", correct: false },
      { text: "phenylketonuria;", correct: false },
      { text: "cystic fibrosis", correct: false },
    ],
  },
  {
    question: "Which of the following foods is given to a healthy baby as a first food?:",
    answers: [
      { text: "cottage cheese", correct: true },
      { text: "meat", correct: false },
      { text: "yogurt", correct: false },
      { text: "porridge", correct: false },
      { text: "egg", correct: false },
    ],
  },
  {
    question: "Additional nutrition with artificial milk formulas in case of deficiency of mother's milk is called",
    answers: [
      { text: "additional factor", correct: true },
      { text: "complementary foods", correct: false },
      { text: " supplementary feeding", correct: false },
      { text: " nutrition correction", correct: false },
      { text: "food subsidy", correct: false },
    ],
  },
  {
    question: "The hormone prolactin, produced by the pituitary gland, promotes:",
    answers: [
      { text: "   Contraction of muscle cells and milk secretion", correct: true },
      { text: "Contraction of the uterine muscles during feeding", correct: false },
      { text: " Stimulates milk production in the alveoli of the mammary gland", correct: false },
      { text: "   Stimulates the production of oxytocin", correct: false },
      { text: "Inhibits breast milk production", correct: false },
    ],
  },
  {
    question: "Routine examination of a 3-month-old child by a pediatrician. Is on artificial feeding. The mother feeds the baby with an adapted milk formula. Explain why you need to give preference to an adapted milk formula?",
    answers: [
      { text: "low bioavailability", correct: true },
      { text: "enriched with saturated fatty acids", correct: false },
      { text: "low amount of vitamins and microelements", correct: false },
      { text: "enriched with glucose and fructose", correct: false },
      { text: "ease of digestion", correct: false },
    ],
  },
  {
    question: "6 month old child is accepted. Healthy. Is breastfed and has started receiving complementary foods in the form of vegetable puree. A mother wonders whether it is possible to give her baby pureed meat. Explain the advantage of the composition of this product?",
    answers: [
      { text: "natural sugars", correct: true },
      { text: "calcium", correct: false },
      { text: "polyunsaturated fatty acids", correct: false },
      { text: "animal protein", correct: false },
      { text: "organic acids", correct: false },
    ],
  },
  {
    question: "A pediatrician examines a 6-month-old child. Healthy. She is breastfed and has started receiving complementary foods in the form of vegetable puree. A mother wonders whether it is possible to give her baby pureed meat. Explain what important element is included in this product?",
    answers: [
      { text: "calcium", correct: true },
      { text: "ascorbic acid", correct: false },
      { text: "glucose", correct: false },
      { text: "heme iron", correct: false },
      { text: "fructose", correct: false },
    ],
  },
  {
    question: "  A mother complaining that the child often breastfeed. The doctor asks: “Does your child often ask to eat?” The mother replies, “Yes, but he looks hungry this week. I think I don't have enough milk.\" The doctor asked: “Yes, did he feel very hungry this week?”  List what listening and information acquisition skills did the family doctor use?",
    answers: [
      { text: "Ask open questions", correct: true },
      { text: "Use gestures and responses that show interest", correct: false },
      { text: "React to mother’s words", correct: false },
      { text: "Reflect to mother’s words", correct: false },
      { text: " Avoid use", correct: false },
    ],
  },
  {
    question: "The boy is 10 months old. The baby is breastfed. Receives 2 complementary foods in the form of thick porridge and vegetable puree in the amount of 100 ml. Weight 7 kg. Height 67 cm. Assessment according to the tables \"Weight for age\" is below -2 (Z scores). How can you interpret the data obtained in the table \"Weight for age\"?",
    answers: [
      { text: "Weight for age normal", correct: true },
      { text: "Overweight ", correct: false },
      { text: "Severe wasted ", correct: false },
      { text: "Wasted", correct: false },
      { text: "Stunted ", correct: false },
    ],
  },
  {
    question: "A child presents with perioral rash and pigmentation of palmar area. What is the cause?",
    answers: [
      { text: "Zinc deficiency", correct: true },
      { text: "Copper deficiency", correct: false },
      { text: "Manganese deficiency", correct: false },
      { text: "Iron deficiency", correct: false },
      { text: "Selenium deficiency", correct: false },
    ],
  },
  {
    question: "Which of the following is not true regarding vitamin C?",
    answers: [
      { text: "Vitamin C is deficient in human breast milk", correct: true },
      { text: "Vitamin C reduces vascular permeability", correct: false },
      { text: "Vitamin c is important in neurotransmitter metabolism", correct: false },
      { text: "Vitamin C helps in triple helix formation of collagen", correct: false },
      { text: "Vitamin c is has antioxidant property", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
