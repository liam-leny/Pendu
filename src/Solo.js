import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';

// https://www.textfixerfr.com/outils/generateur-de-mots-aleatoires.php
const listeMot = ["abandonner", "abandonné", "abattoir", "abattu", "abeille", "abomination", "abordable", "abrasif", "abricot", "absence", "absent", "absolution", "absorbable", "absorbant", "absorber", "abstinence", "abstinent", "abstrait", "abstraitement", "absurde", "absurdement", "absurdité", "absurdités", "abuser de", "académie", "académique", "acceptant", "accessoires", "accident", "accidentel", "accord", "achevée", "acide", "acier", "acoustique", "acrobate", "acrobatie", "acrobatique", "acteur", "action", "actrice", "actualité", "adaptatif", "addictif", "adhérence", "adhésif", "admissible", "admission", "adolescent", "adopteur", "adoption", "adorable", "adresse", "adrénaline", "adsorbable", "adulte", "adéquat", "affaire", "affaires", "affamé", "affliction", "aficionado", "agence", "agent", "agilité", "agitateur", "agonie", "agressif", "agression", "agréable", "aidez-moi", "aigle", "aigu", "aiguille", "ailette", "aimant", "air", "alarmant", "alarme", "alcool", "alcoolique", "alibi", "alignement", "aligner", "aliéner", "aller", "allergique", "alliance", "alligator", "allié", "alphabet", "alphabétique", "altercation", "alterner", "aluminium", "amande", "amateur", "ambiant", "ambidextre", "ambigu", "ambitieux", "ambition", "ambivalent", "ambre", "ambulance", "ambulatoire", "amer", "americana", "amertume", "ami", "amibe", "amibien", "amiral", "ammoniac", "amnésie", "amnésique", "amoral", "amour", "amphibie", "amplitude", "amputation", "amputer", "amulette", "amusant", "amusement", "amuser", "américain", "analyser", "analyste", "analytique", "ananas", "anatomie", "anchois", "ancêtre", "androgyne", "angoissant", "angoisse", "anguille", "animal", "animaliste", "animatronique", "ankh", "annihiler", "anniversaire", "annuel", "anomalie", "anonyme", "anormal", "anormalement", "anti douleur", "anticlimatique", "antidémocratique", "antilope", "antilopes", "antique", "antiviral", "anxieux", "anxiété", "apiculteur", "aplatir", "apocalypse", "apocalyptique", "apparaître", "appareil", "apparemment", "apparence", "apparent", "apparition", "appartement", "appartenir", "appel", "applaudissements", "application", "appliqué", "apporter", "approbation", "approchant", "approximation", "appât", "appétit", "après", "après le monde", "après midi", "aquarium", "aquatique", "araignée", "arbitraire", "arbre", "arche", "archer", "archet", "architecte", "archiver", "ardent", "argent", "argile", "arme", "arme à feu", "armure", "armée", "arrivée", "arrière", "arrière-cour", "arrière-goût", "arrogant", "arrêt", "art", "articulation", "artificiel", "artiste", "arôme", "ascenseur", "asexué", "assassin", "assassinat", "assemblée", "association", "associer", "assurance", "astronaute", "atmosphère", "atomique", "atrocité", "atrocités", "attachement", "attaquant", "attaque", "attaquer", "attention", "attitude", "attraction", "attrape-mouche", "attribut", "attribution", "au dessous de", "au dessus de", "au revoir", "au-delà", "au-dessus du sol", "audace", "audacieux", "audio", "audition", "augmentation", "aussi", "authentique", "auto stoppeur", "automates", "automatique", "autonome", "autonomisation", "autopsie", "autorité", "autoroute", "autre part", "auxiliaire", "avancement", "avant", "avant bras", "avantage", "avenir", "aventure", "aversion", "aveuglant", "aveugle", "aveuglément", "aviateur", "avide", "avidité", "avocat", "avoir pour but", "awesomeness", "axe", "axiome", "aérien", "aérodynamique", "aéroport", "babillage", "babiller", "babiole", "babouin", "baby-sitter", "bachelier", "bacon", "bactéries", "badge", "badlands", "bagarre à coups de poings", "bagarreur", "bague", "baiser", "balcon", "baleine", "balise", "balistique", "balivernes", "balle", "ballerine", "ballet", "ballon", "bambou", "banane", "bananes", "banc", "bandeau", "banque", "banquet", "baptême", "bar", "barbare", "barbe", "barbouillage", "barge", "barnburner", "baron", "barricade", "bars", "bas", "base", "bases", "basket", "basse-cour", "bassin", "baster", "bastion", "bataille", "bataillon", "bats toi", "battement", "battement de coeur", "battement de tambour", "batterie", "battre", "battre en retraite", "battu", "bavardage", "bazooka", "baïonnette", "beau", "beauté", "belette", "berceau", "berceuse", "bernacle", "berserker", "bestial", "biberonner", "bible", "biblique", "bicyclette", "bien", "biens", "bientôt", "bienveillant", "bigmouth", "bijou", "bikini", "binoculaire", "biologique", "bionique", "bip", "biplan", "bit", "biter", "bizarre", "blaireau", "blanc", "blaster", "blessure", "bleu", "bleu vert", "bleuâtre", "blizzard", "bloc-cellule", "blocus", "blond", "bloque", "bloquer", "bloqueur", "bluffer", "blâme", "boa", "bobine", "boisson", "bombardier", "bombe", "bon dieu", "bonbonnier", "bonbons", "bonheur", "bonnet à poil", "boom", "bootlegger", "bord", "bosse", "bossu", "bouche", "boucher", "boucle", "bougie", "bouledogue", "boulevard", "bourdonnement", "bourdonner", "bourreau", "bousculer", "bout du doigt", "bouteille", "boutique", "bouvreuil", "bovine", "boîte", "boîte de sécurité", "braquage", "bras", "brigade", "brillamment", "brillant", "briller", "brique", "bronze", "brosse", "brouillard", "broyage", "broyeur", "bruit", "brumeux", "brut", "brutal", "brutalement", "brute", "brûlant", "brûler", "brûlé", "buffet", "bughouse", "bulldozer", "bulle", "bulletin", "bullwhip", "bâtard", "bâtiment", "béant", "béatement", "bébé", "bénir", "bénédiction", "béquille", "bétail", "béton", "bête", "bœuf", "cabane", "cacher", "cachette", "caché", "cadavre", "cadeau", "cadre", "cage", "caillot", "caisse", "calcul", "calendrier", "camarade", "cambre", "cambriolage", "camelote", "campagne", "caméléon", "canal", "canapé", "canard", "cancérogène", "cannabis", "canneberge", "cannelle", "cannibale", "cannibalisme", "canon", "canular", "canyon", "caoutchouc", "capacité", "capacités", "capitaine", "capitulaire", "capsule", "captif", "captivité", "capture", "capturé", "capuche", "car", "caramel", "caravane", "carbone", "carburant", "carcasse", "cardinal", "caresse", "cargaison", "caribou", "carnaval", "carnies", "carnivore", "carotte", "carré", "cartel", "cas", "casemate", "casino", "casque", "casque audio", "cassable", "cassé", "castor", "catastrophe", "cathédrale", "catégorie", "cauchemar", "cavité", "ceinture", "cellulaire", "cellule", "cendre", "cendres", "cent", "centaure", "central", "centre", "centre ville", "cerceau", "cercle", "cercueil", "cerf", "cerise", "certains", "cerveau", "chagrin", "chaise", "chalet", "chaleur", "chalumeau", "chaman", "chambre", "chameau", "champ", "champ de bataille", "champignon", "champion", "chanceux", "chanson", "chant", "chantage", "chaotique", "chapeau", "chapitre", "chaque", "charabia", "charade", "charbon", "charismatique", "charisme", "charmant", "charme", "charnel", "charnière", "charogne", "chasse", "chasse d'eau", "chasseur", "chat", "chaton", "chaud", "chauffage", "chauffeur", "chaussée", "chauve", "chauve souris", "chaîne", "chef", "chef de clan", "chemisier", "chenille", "chercher", "cheval", "cheval-vapeur", "cheville", "chialer", "chic", "chien", "chiens", "chimique", "chirurgical", "chirurgien", "choc", "choisir", "choléra", "choquant", "chose", "chouette", "chromatique", "chromosome", "chronologique", "chuchotement", "chunky", "chute", "chutes", "château", "chèvre", "cicatrice", "ciel", "cierge magique", "ciguë", "ciment", "cimetière", "cinglé", "cinq", "circuit", "circuits", "cire d'abeille", "cirque", "ciseau", "citoyen", "citron", "citron vert", "civilisation", "clair", "classique", "clavicule", "client", "clignotant", "clignote", "clignotement", "climax", "clinique", "cloche", "cloque", "club", "clubhouse", "clé", "clôture", "cobra", "coccinelle", "cochonneries", "cocon", "code", "coercition", "coeur noir", "cognitif", "coiffeur", "col", "cola", "collectable", "collection", "collider", "colline", "collines", "collision", "colombe", "colon", "colonel", "colonie", "colonne", "colonne vertébrale", "colère", "coma", "comateux", "combat", "combattant", "combustible", "comité", "commander", "commando", "commencer", "comment", "commercial", "commotion cérébrale", "commun", "communion", "compact", "compagnie", "compagnon", "compartiment", "compatissant", "complice", "compliqué", "comportement", "composer un numéro", "composite", "composé", "compulsif", "compulsion", "comète", "concave", "concentrer", "concept", "conception", "conceptuel", "concert", "conclusion", "concours", "concurrent", "condamner", "condamné", "condition", "condo", "conduire", "confiance", "confiant", "confidentiel", "conflit", "confortable", "confrontation", "confus", "confusion", "congédiement", "connaissance", "connectivité", "connexion", "conquérant", "conquête", "conscient", "conseil", "conseiller", "conservateur", "console", "consommateur", "consommation", "conspiration", "constante", "consultant", "conséquences", "contagieux", "contaminant", "contamination", "conte de fée", "contemporain", "content", "contenu", "contesté", "contexte", "continental", "continu", "continue", "contorsionniste", "contractuel", "contradiction", "contraste", "contre", "contrebandier", "controversé", "contrôle", "conversation", "conversion", "convertible", "convexe", "convulsion", "corbeau", "corbillard", "cordons", "corne", "corporation", "corps", "correct", "corrosif", "corrosion", "corruption", "corrélation", "corset", "cortex", "cosmique", "cosmiquement", "cosmonaute", "cosmétique", "costume", "costumé", "coton", "cou", "coude", "couleur", "coup", "coup de chaleur", "coup de poing", "coupable", "coupe", "couple", "coupure électrique", "cour de récréation", "courage", "courageux", "couramment", "courbe", "courbé", "couronne", "court", "couteau de poche", "couvre-feu", "coyotes", "coïncidence", "crabe", "crabes", "craie", "crainte", "cramoisi", "cran", "crash", "crasher", "crasseux", "cratère", "crawl", "crayon", "creeper", "creux", "crevette", "cri", "cricket", "crier", "crime", "criminel", "criquet", "crise", "cristal", "critique", "croc", "crochet", "crocodile", "croire", "croisière", "croquer", "crottes", "croustillant", "croyable", "croyant", "croyez", "croûte", "cruauté", "crucifiant", "crucifix", "crucifixion", "cruel", "cryptage", "crypte", "crypter", "cryptique", "crâne", "créateur", "créatif", "création", "créature", "crédence", "crépuscule", "cube", "cuir", "cuire", "cuivre", "culpabilité", "culte", "culturel", "curieuse", "curiosités", "cyanure", "cybernétique", "cyclique", "cyclope", "cynique", "câble", "câbler", "câlin", "cécité", "céleste", "célèbre", "célébrité", "céramique", "cérémonial", "côte", "côtelettes", "côtier", "cœur", "damnation", "danger", "dangereux", "dansant", "danseur", "dard", "dauphin", "dauphins", "de base", "de bonne heure", "de côté", "de l'alcool", "de toute façon", "deadbeat", "dense", "dent", "dents", "dernier", "derrière", "des choses", "des dizaines", "des gants", "des lunettes de protection", "des sacs", "des trous", "des vaches", "destin", "destructeur", "destruction", "deuil", "deux", "devenir", "devenu", "dextérité", "diable", "diabolatry", "diabolique", "diagonale", "diamant", "diamétral", "dictateur", "dieu", "difficile", "difforme", "différent", "dignitaire", "digue", "dilemme", "dimension", "dimensionnel", "diminué", "dinosaure", "diplomate", "diplomatie", "diplomatique", "direct", "direction", "dirigeable", "disciple", "discorde", "discussion", "diseur de bonne aventure", "disparu", "disponible", "dispositifs", "disque", "disrupteur", "dissoudre", "distillerie", "distinct", "distorsion", "distraitement", "distribution", "district", "diva", "divertir", "divin", "divinité", "division", "divorce", "divulgation", "dix", "dix neuf", "dixième", "doberman", "docteur", "document", "dogtooth", "doigt", "domestiqué", "domicile", "dominant", "domination", "domino", "dommage", "don", "donnant", "donner un coup", "donneur", "données", "donut", "dope", "dorloter", "dormant", "dormir", "dosage", "double", "douleur", "doux", "doux-amer", "douzaine", "douze", "doué", "drainer", "dramatique", "drame", "drapeau", "drapeaux", "drims", "drogue", "droite", "droits", "drone", "du froid", "du sang", "du sud", "duc", "duel", "dupliquer", "dur", "duvet", "dynamique", "dynamitage", "dynamiter", "dynastie", "débat", "débauche", "déboguer", "débris", "début", "débutant", "décadence", "décadent", "décapitation", "décapiter", "décennie", "décent", "décharge", "décharné", "déchiffreur", "déchiqueté", "décoder", "décodeur", "décomposition", "déconcertant", "déconnecter", "décontamination", "décrit", "décès", "déduction", "défaut", "défection", "défi", "défiguration", "défiguré", "définitive", "déformateur", "déformation", "dégoûtant", "dégradant", "dégénérer", "dégénérescence", "déjà", "délicat", "délicatesse", "délice", "délicieux", "délinquant", "délivrance", "déloyal", "démembrement", "démembrer", "démocratique", "démolition", "démon", "département", "dépendance", "dépendant", "déplorable", "dépourvu", "dépression", "dérivation", "dérive", "dériveur", "désert", "désespoir", "désespéré", "désintégration", "désobéir", "désolé", "désorientation", "détachable", "détails", "détenu", "déterminé", "détestable", "détonateur", "détox", "détraqué", "détruire", "dévastation", "développer", "déverser", "dévorer", "dîner", "dôme", "eau", "eau noire", "eaux profondes", "eaux usées", "effacement", "effacer", "efficace", "effondrement", "effrayant", "ego", "embarrassant", "embrasse", "embrasser", "embrouiller", "embuscade", "empathique", "empereur", "empire", "empirique", "empoisonneur", "en arrière", "en aval", "en bonne santé", "en colère", "en dessous de", "en deuil", "en portant", "en tissu", "en train de manger", "enchantant", "enchères", "encore", "encre", "enfant", "enfants", "enfer", "engloutir", "enlevés", "enlèvement", "ennemi", "ennemis", "ennuyeux", "ensuite", "entendre", "enterrement", "enterré", "entité", "entonnoir", "entre", "entreprise", "entrer", "entrer en collision", "entropie", "entrée", "envahisseur", "enveloppe", "envie", "envoi", "enzyme", "ermite", "erreur", "escalier mécanique", "escargot", "esclave", "escroc", "espace aérien", "esprit", "espérer", "essaim", "essence", "essentiel", "est", "estimation", "etat", "eunuque", "exact", "exactitude", "exalté", "examinateur", "excellent", "exception", "excessif", "excitation", "exclusif", "excuse", "excuses", "excès", "exilé", "existant", "exorcisme", "expansion", "expert", "expiation", "explicite", "explosion", "exportation", "exposer", "exposition", "expressif", "expression", "expédition", "expérience", "exquis", "extensif", "externe", "extorsion", "extrait", "extraterrestre", "extravagant", "extrémiste", "extrême", "exécuter", "exécuteur", "exécutif", "eyetooth", "fabrication", "facile", "faction", "factuel", "fade", "faible", "faim", "faire semblant", "faisceau", "fait maison", "falsification", "fanatique", "fantastique", "fantoche", "fantomatique", "fantôme", "farce", "fardeau", "fatal", "fatalité", "faucon", "faussaire", "fausser", "faute", "fauteuil", "fauteur de trouble", "faux", "faveur", "favorable", "façade", "femme", "fer à repasser", "ferme", "fermentation", "fermenter", "fermer", "fermeture", "fermeture éclair", "fertile", "festival", "feu", "feu de l'enfer", "feuille", "feux croisés", "fiasco", "fibre de verre", "fictif", "fidèle", "fier", "figure de proue", "filament", "fille", "film", "filtre", "fin", "final", "financer", "financier", "fini", "finition", "fissure", "fièvre", "flamber", "flamboyant", "flash", "fleur", "fleurir", "fleurs", "flip", "flipper", "flirt", "flirtation", "flocon", "flophouse", "floral", "flotter", "flou", "fluctuation", "fluide", "flux", "flèche", "flèches", "foi", "foie", "folie", "fonctionnalité", "fonctionnel", "foncé", "fondamental", "fondateur", "fondation", "fondre", "fondu", "fontaine", "forme", "forme d'onde", "formel", "formulation", "formule", "fornicateur", "fort", "forteresse", "fortune", "forêt", "fossile", "fossé", "fou", "fou furieux", "foudre", "foudroyé", "fouet", "foulard", "foule", "fourchette", "fourmilier", "fournisseur", "foutaise", "fraction", "fracture", "fragile", "fragment", "frais", "framboise", "français", "frapper", "frappé", "fraude", "frauder", "frauduleux", "freak", "frilosité", "fringant", "frit", "friture", "froid", "frontière", "frustration", "frère", "frénésie", "frénétique", "fréquent", "fugitif", "fulminer", "fumée", "funérailles", "furieux", "furtif", "fusible", "fusil à pompe", "futuriste", "fâché", "fédéral", "fédération", "félicité", "fémur", "féodal", "féroce", "fétiche", "fête", "gadget", "gaffe", "gai", "galactique", "galerie", "galopant", "gang", "gangland", "gangster", "gant", "garage", "garanti", "gardien", "gare", "gargantuesque", "gargouille", "gargouillis", "gaz lacrymogène", "gazelle", "gel", "gelé", "gemmes", "gentil", "germe", "gestuel", "ghetto", "gifler", "gigantesque", "gingembre", "glacial", "glacier", "glamour", "glande", "glandulaire", "glissant", "glittery", "global", "gloire", "glouton", "gluant", "goldbricker", "golfe", "gomme", "gonflable", "gonfler", "gonflé", "goofball", "gorille", "goule", "gourmand", "gourou", "goutte", "gouttelette", "gouttes", "gouttière", "gouverneur", "goût", "gracieux", "graffiti", "grain", "grain de raisin", "graisse", "graisseux", "grand", "grandiloquent", "grandiose", "grange", "granit", "granularité", "granuleux", "graphique", "grappe", "grappler", "gratuit", "graveleux", "gravier", "gravitationnel", "grenade", "grenier", "grenouille", "grenouilles", "griffe", "gril", "grincer", "gris", "grizzly", "grognement", "gros", "gros morceau", "grosse légume", "grosse tête", "grossier", "grotesque", "groupe", "guerre", "guerrier", "gueule de bois", "guide", "guider", "guidon", "guilde", "guillotine", "gunk", "gutless", "guérilla", "guérir", "guérison", "guérisseur", "guêpe", "gymnaste", "gymnastique", "gâteau mignon", "géant", "gémissant", "gémissement", "génial", "général", "génération", "génétique", "géométrie", "géométrique", "gênant", "habitude", "habituel", "hache", "hacher", "hachette", "haine", "halloween", "hallucination", "haltère", "hamster", "hangar", "hanter", "hanté", "hardiment", "haricot", "harmonie", "harmonique", "harnais", "harpe", "harpon", "haut de la ville", "haute", "headlock", "herbe", "hermétique", "heure", "heure du coucher", "hex", "hibernation", "hickory", "hideux", "hippopotame", "hirsute", "hisser", "histoire", "historique", "hiver", "hoaxer", "hochet", "hogtied", "homicide", "homme muscle", "honneur", "honnête", "honnêteté", "honoraire", "honteux", "hooligan", "hoopla", "horizon", "horizontal", "horloge", "hormonal", "horoscope", "horreur", "horreurs", "horrible", "hostilité", "houblon", "huit", "humain", "humainement", "humble", "humeur", "humide", "humilité", "hurlant", "hurlement", "hybride", "hymne", "hype", "hypnotique", "hyène", "hébergement", "hélice", "hélicoptère", "héraut", "héros", "héroïque", "hérétique", "hésitation", "hôpital", "hôte", "identique", "identité", "idéal", "ignorant", "iguane", "illimité", "illégal", "imaginaire", "imbécile", "immunité", "impair", "impie", "implant", "importuner", "imposteur", "imprimer", "impuissant", "impulsion", "impur", "incendiaire", "incendie volontaire", "incertain", "incessant", "incroyable", "incrédule", "incurvé", "industrie", "industriel", "indécent", "infini", "infirmière", "inflammable", "initiale", "injurieux", "injustice", "innocent", "inoccupé", "inoffensif", "inondation", "insecte", "installer", "intelligent", "intemporel", "interdit", "interminable", "interne", "interrupteur", "intime", "intrigant", "intrus", "intrépide", "inutile", "invention", "inverse", "invisible", "invitation", "irriter", "irrésistible", "islamisme", "ivoire", "ivre", "jade", "jaillissement", "jardin", "jerid", "jeter", "jeu", "jeu de jambes", "jeu de tir", "jeune", "joie", "jouer", "jouet", "joueur", "jour", "jour du jugement dernier", "journal intime", "journée", "journées", "joypop", "joyride", "jugement", "jumelle", "junior", "junkyard", "jus", "justice", "juvénile", "kangourou", "kidnappeur", "l'ange", "l'éléphant", "la biologie", "la chair", "la chance", "la cire", "la communication", "la corruption", "la crainte", "la criminalité", "la cérémonie", "la demoiselle", "la description", "la discipline", "la découverte", "la démocratie", "la famille", "la fertilité", "la frange", "la frayeur", "la fréquence", "la graine", "la grille", "la grotte", "la magie", "la monarchie", "la passion", "la perception", "la perfection", "la propagande", "la source", "la terreur", "la tombe", "la toux", "la victoire", "la vie", "la violence", "la vitesse", "laid", "laissez tomber", "laiteux", "laiton", "lame", "lance-flammes", "langue", "lanterne", "lapin", "laser", "lasso", "lavande", "lave-vaisselle", "laver le cerveau", "le banquet", "le bec", "le chaos", "le chariot", "le coeur lourd", "le marais", "le plus chaud", "le plus grand", "le plus lourd", "le plus puissant", "le plus saint", "le potage", "le regret", "le sable", "le volume", "les baleines", "les chevaux", "les coeurs", "les couleurs", "les yeux", "levage", "lever du soleil", "liberté", "libre arbitre", "libéral", "libérateur", "libération", "lien", "lierre", "lieu", "lieu de naissance", "ligne de base", "ligne directrice", "limousine", "linéaire", "lion", "liqueur", "liquide", "lisse", "liste noire", "lit", "livre", "logique", "loin", "loisir", "longue", "lot", "loterie", "loup", "loup garou", "loups", "lourd", "lubrifiant", "lueur", "lumineux", "lumière", "lumière du jour", "lumières", "lune", "lurker", "lustre", "lutin", "luxe", "luxueux", "luxure", "lâche", "lâcher", "lécher", "légendaire", "légende", "légion", "légèreté", "lévitation", "lézard", "macabre", "machine", "magnifique", "magnétique", "main", "mains", "maison", "majeur", "mal", "mal au cœur", "mal au ventre", "mal de tête", "malade", "maladie", "malheureux", "malhonnête", "malédiction", "manchot", "manette", "manger", "manieur", "manifestation", "manifeste", "manille", "manquant", "manteau", "marbre", "marelle", "marginal", "marguerite", "marguerites", "marie", "marque", "marron", "martingale", "martini", "martyr", "martèlement", "marécage", "masque", "masque à gaz", "massacre", "massif", "matraque", "maudit", "mauvaise bouche", "maximum", "maîtriser", "meilleur", "menace", "mendiant", "mendicité", "mental", "menthe poivrée", "merveille", "messager", "messie", "meurtre", "meurtrier", "miel", "miellat", "mieux", "militaire", "milliard", "milliardaire", "mince", "minimal", "minipil", "minuscule", "miroir", "mission", "misérable", "mitrailleur", "mixer", "mixeur", "mode", "moderne", "modifier", "modèle", "mohawk", "moi à", "moineau", "moitié", "moléculaire", "moment", "momentané", "monde", "monochrome", "monstre", "montagne", "montrer", "morbide", "morceau", "mordre", "morne", "mort", "mortel", "moteur", "mouche", "moudre", "mousse", "moustache", "moyenne", "munition", "mur", "muscle", "musclé", "museau", "mutagène", "mutant", "mutation", "mutilation", "myrtille", "mystique", "mystère", "mystérieux", "mythique", "mâcher", "mère", "mécanique", "méchant", "mécontentement", "médicament", "méduse", "mégapole", "mélange", "mélanger", "mélangé", "mélodie", "mémoire", "mépris", "méprisable", "métal", "métallique", "métro", "mûr", "n'importe où", "n'importe qui", "n'importe quoi", "narcotique", "nationale", "naturel", "navré", "naïf", "nectar", "nerf", "nerveux", "nervure", "nettoyer", "nichée", "nitro", "niveau", "noble", "noir", "noirceur", "noix de coco", "nomade", "nombre", "nombril", "non conforme", "non vivant", "nord", "norme", "nostalgique", "nourrir", "nouveau", "noyer", "noyé", "nu", "nuage", "nucléaire", "nuire", "nuit", "nulle part", "numbskull", "numérique", "nébuleuse", "nécrotique", "née", "négatif", "négligent", "néon", "névrosé", "nœud", "nœuds", "objectif", "objet", "obligatoire", "obliger", "observateur", "obsession", "obstacle", "obéit", "occidental", "océan", "oeuf", "officiel", "officier", "oiseau", "ombre", "omnivore", "ondes de fond", "opposition", "optimum", "optionnel", "opéra", "or", "orange", "orangutang", "orbe", "ordinaire", "ordinateur", "ordre du jour", "oreille", "original", "ornement", "ornemental", "orphelin", "orphelinat", "orthodoxe", "os", "os du talon", "os iliaque", "otage", "oublié", "ouest", "ours", "ouvert", "pair", "palourde", "pandémie", "panique", "papa", "papier", "papillon de nuit", "parachute", "parade", "paradis", "paradoxe", "parallèle", "paralysie", "paralysé", "parasite", "parcelle", "pardonné", "pare-chocs", "parfait", "parfum", "pari", "parler", "parmi", "pas", "passager", "passerelle", "pastorale", "patient", "patrie", "patrimoine", "patrouille", "pauvre", "pays", "pays de rêve", "paysage", "païen", "peau", "peep show", "peluche", "pelvien", "penser", "pension de famille", "pensionnaire", "pente", "percer", "percutant", "perdant", "perdre connaissance", "perle", "perles", "permettre", "perroquet", "perruque", "personnel", "perturbation", "perturber", "pervers", "pervertir", "pessimiste", "petit", "peu", "peu fréquent", "peu sûr", "peur", "pharaon", "pharmacie", "phase", "philosophie", "phonographe", "phonétique", "photographier", "phénomènes", "phénoménal", "pictural", "pied", "pied bot", "pieds", "pierre", "pieux", "pigeon", "pilote", "pilote automatique", "pilule", "pincer", "pinwheel", "pique-nique", "pirater", "pistolet", "pistolets", "pitié", "pièce", "pièces", "piège", "piège mortel", "plage", "plaid", "plan", "planeur", "plantation", "plante", "planète", "planétaire", "plasma", "plastique", "platitude", "pleinement", "pleuré", "pliant", "plier", "pluie", "plume", "plus", "plus anxieux", "plus chaud", "plus facile", "plus grand", "plus sexy", "plusieurs", "pluviosité", "pneumatique", "poche", "poids lourd", "poids plume", "poignée", "poilu", "poing", "poings nus", "point", "point de contrôle", "pointe", "pointu", "poison", "poisson", "poisson rouge", "polaire", "poli", "pomme", "poney", "pont", "populaire", "porc", "port", "portable", "portail", "porte", "porteur", "portrait", "positif", "position", "possession", "posséder", "pot", "pot de miel", "potentiel", "potins", "poubelle", "pouce", "poudre", "poulain", "poule mouillée", "poulet", "poulpe", "poupée", "pourri", "pourrir", "pousser", "poussière", "poète", "poésie", "poétique", "pragmatique", "pratique", "premier", "premier-né", "prendre plaisir", "presque", "pression", "preuve", "primate", "prime", "primitif", "privilège", "privilégié", "privé", "prix", "prière", "processus", "procès", "production", "profil", "profond", "programme", "projection", "projet", "promettre", "promis", "propergol", "prophète", "prophètes", "prophétique", "prophétiser", "proposition", "propriété", "prostituée", "protection", "protestation", "protéger", "près", "prédateur", "prédiction", "prédire", "préfabriqué", "présent", "préserver", "président", "présumé", "psycho", "public", "publicité", "puissance", "puissant", "puma", "punaise", "pur", "puzzle", "puéril", "pyramides", "python", "pâle", "pâte", "pèlerin", "père", "périlleux", "périodique", "pétard", "pétiller", "pêche", "qualité", "quantum", "quarante", "quartier général", "quatre", "quelqu'un", "rabat", "racine", "raffermir", "rage", "raid", "raifort", "rainure", "raison", "rampant", "ranch", "rapide", "raquette", "rassling", "raster", "rastle", "rastling", "rat", "raton laveur", "ravageur", "rayon", "rayon de lune", "rebelle", "rebondir", "recherche", "reclus", "reconnaissant", "reconstitution historique", "record", "reculer", "rediffusion", "redoutable", "refroidissement", "refuge", "regarder", "reine", "renarde", "rencontre", "rendez-vous", "renflé", "renversement", "reptile", "requin", "responsable", "ressentir", "rhum", "riches", "rigide", "risqué", "rival", "robe", "robot", "robotique", "roi", "rond", "rongeur", "rose", "rouge", "rougir", "rouille", "royal", "royalties", "royaume", "rubis", "ruche", "ruelle", "rugueux", "ruse", "rusé", "râpé", "réalisateur", "réapprendre", "récent", "réchauffeur", "récipient", "récolte", "récréation", "réfugié", "région", "régional", "réglable", "réparer", "réplique", "répondre", "répression", "république", "répéter", "réservoir", "révolte", "rêver", "rêverie", "rêveur", "rôti", "sabot", "sabotage", "sabots", "sac", "sacré", "sadique", "sage", "sagesse", "saignement", "saigner", "saint", "saisir", "sale", "saleté", "salle de bal", "salle de réunion", "salon de coiffure", "salé", "sang", "sanglant", "sanglier", "sanguinaire", "sanitaire", "sans abri", "sans aide", "sans ami", "sans aucun doute", "sans avenir", "sans but", "sans coeur", "sans douleur", "sans défaut", "sans espoir", "sans fond", "sans peur", "sans rêve", "sans âge", "sarbacane", "sauce", "saule", "saut", "sauterelle", "sauvage", "saveur", "scanner", "schème", "scie sauteuse", "scie à main", "scie à métaux", "scie à ruban", "sciure", "screamer", "sculpteur", "scélérat", "scénique", "se désintégrer", "se détacher", "se faner", "se glisser", "se leva", "se réveiller", "se sentait", "se vanter", "seau", "sec", "secouer", "secousse", "secteur", "section", "seigneur", "sel", "sens inverse", "sensationnel", "sentiment", "sentiments", "sentinelle", "sept", "serpent", "serré", "serviteur", "sexe", "sexuel", "sifflement", "signal", "silence", "simple", "singe", "sinistre", "sirène", "six", "siècle", "social", "soif de sang", "soignant", "sol", "soleil", "solide", "solitaire", "solitude", "sombre", "sommet", "somnolent", "sonde", "sonique", "sonner", "sorcier", "sorcière", "sort", "sortie", "soudain", "souffle", "soufre", "souhait", "soulèvement", "souple", "sourire", "sous", "sous-marin", "sous-sol", "souteneur", "spectateur", "sphère", "spiritueux", "sport de sang", "spot", "sprites", "stupide", "stupéfaction", "stérile", "suave", "subsonique", "sucette", "suceur de sang", "sucre", "sud", "super", "supplice", "supplémentaire", "surgir", "surréaliste", "symbole", "symbolique", "syndicat", "système", "séducteur", "séries", "sérum", "sérénité", "sévère", "tache de naissance", "tacheté", "tactique", "tambour", "tampon", "taureau", "teinture de sang", "temps", "temps de guerre", "tendu", "tenir", "tentative", "terminer", "terminus", "terrain", "terrains", "terres", "terreurs", "terrible", "terrifiant", "tigre", "timide", "tirer", "tissu", "toile", "tomber", "tombée de la nuit", "tonnerre", "torche", "tordu", "tornade", "torpille", "total", "toujours", "tourner", "tous les jours", "tout", "tout le monde", "tout-puissant", "toutefois", "toxicomane", "toxique", "tragique", "trahir", "trahison", "transfuge", "transpiration", "trappe", "traumatisme", "travail de l'ouest", "traînée", "treed", "tremblement", "tremper", "triangle", "triste", "tristement", "tristesse", "troc", "tromperie", "trompé", "troupeau", "trouver", "truc", "trèfle", "trémie", "trépidant", "trésor", "tuer", "tuyau", "tuyaux", "type", "tyran", "tâtonnant", "témoin", "téméraire", "téter", "tête", "tête de marteau", "tête grasse", "têtu", "ultime", "un", "un compagnon", "un hôtel", "un événement", "une analyse", "une descente", "une fleur", "une rançon", "une succursale", "unité", "urbain", "urgence", "usine", "va-t-en", "vacances", "vaciller", "vampire", "variole", "vaste", "vautour", "vecteur propre", "velours côtelé", "velu", "vengeance", "venger", "ventre", "ventre plein", "ver", "verger", "verre", "vers le bas", "vert", "vessie", "vibreur", "vide", "vie après la mort", "vieilli", "vierge", "vieux", "village", "ville", "ville natale", "vinyle", "violent", "violet", "vipère", "virtuel", "visage", "vision", "visiteur", "vite", "vivement", "vivre", "voir", "voix", "vol", "volcan", "volcanique", "voleur", "voyage de noces", "voyant", "vrai", "vraiment", "vérité", "web", "zombi", "zoo", "zut", "zèbre", "zéro", "à bout de souffle", "à gauche", "à la charge", "à la maison", "à la mode", "à mi-chemin", "à tout moment", "âge", "âme", "âne", "éblouissant", "ébène", "échange", "échappatoire", "échapper", "écho", "échouer", "éclairer", "éclat", "écorce", "écrasement", "écraser", "égal", "église", "égocentrique", "égoïste", "élaborer", "élargir", "élastique", "électrique", "électrode", "électron", "élimination", "éliminer", "élite", "éloignement", "élongation", "élégant", "élément", "éléphants", "élévation", "émerger", "émeute", "émotif", "émotion", "émousser", "énergie", "énigme", "énorme", "épais", "épave", "épeler", "éphémère", "épicerie fine", "épingle", "épisode", "éponge", "épouvantable", "éprouvé", "équation", "équilibre", "équipage", "équipement", "équivalent", "érotique", "éruption", "ésotérique", "établissement", "étain", "étalon", "étalonnage", "étant", "étape", "éternel", "éternité", "éther", "éthique", "étoile", "étoile de mer", "étonnamment", "étonnant", "étouffement", "étourdi", "étourdir", "étrange", "étranger", "étranglement", "étreinte", "évacuation", "évacuer", "évaluer", "évasion", "éveil", "éventuel", "évidentiel", "évier", "éviter de", "évolution", "évoquer", "île", "œil"]

class WordChoice extends React.Component {
  constructor(props) {
    super(props);
    // value correspond au mot choisi par l'utilisateur
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.choixMot();
  }

  /**
   * Choisi un mot aléatoirement dans la liste de mot
   */
  choixMot() {
    var min = 0;
    var max = 2756;
    var random = Math.floor(Math.random() * (max - min)) + min;
    var mot = listeMot[random]
    this.setState(
      { value: mot }
    )
  }


  componentDidUpdate() {
    console.log('value :' + this.state.value)
    if(!(this.state.value === undefined)) {
      // Un mot ne peut comporte que des lettres de l'alphabet minuscules ou majuscules
      if (this.state.value.match('^[a-zA-Z]*$') === null) {
        this.choixMot();
      }
    }
      }
  /**
   * Vérifie que le mot choisi correspond bien aux critères notamment que ce ne soit pas un mot composé
   */
  verificationEntree() {
    console.log(this.state.mot)
    // Un mot ne peut comporte que des lettres de l'alphabet minuscules ou majuscules
    if (this.state.value.match('^[a-zA-Z]*$') === null) {
      this.choixMot();
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>
            L'ordinateur vient de choisir un mot
            <p></p>
          </label>
          <nav>
            <p></p>
            {/*Permet de rediriger vers une autre page en envoyant des données  */}
            <Link to="/jeu" state={{ mot: this.state.value }}>
              <button className='button' type="submit">
                Lancer la partie
              </button>
            </Link>
          </nav>
        </form>
      </div>

    );
  }
}


export default WordChoice;
